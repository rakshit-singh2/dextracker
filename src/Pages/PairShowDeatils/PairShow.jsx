import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Function to fetch asset data
async function fetchAssetData(address) {
    try {
        const response = await axios.get(
            `https://api.mobula.io/api/1/market/pair?address=${address}`
        );
        const trade = await axios.get(
            `https://api.mobula.io/api/1/market/trades/pair?address=${address}`
        );
        // Wait for both requests to complete
        const [pairData, tradeData] = await Promise.all([response, trade]);
        return {
            pairData: pairData.data.data,
            tradeData: tradeData?.data?.data,
        };
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        throw new Error('Failed to fetch data');
    }
}

const PairShow = () => {
    const { address } = useParams(); // Extract address from URL parameters
    const [data, setData] = useState(null); // State for storing fetched data
    const [loading, setLoading] = useState(true); // State to track loading status
    const [error, setError] = useState(null); // State for error handling

    // Fetch data when the component mounts or address changes
    useEffect(() => {
        const getData = async () => {
            if (!address) {
                setError('Address is required');
                setLoading(false);
                return;
            }

            setLoading(true); // Start loading
            try {
                const fetchedData = await fetchAssetData(address);
                console.log('Fetched Data:', fetchedData);  // Log fetched data for debugging

                // Check if the data is valid
                if (fetchedData && fetchedData.pairData && fetchedData.tradeData) {
                    setData(fetchedData); // Set the fetched data
                    setError(null); // Clear any previous errors
                } else {
                    setError('Invalid data structure');
                }
            } catch (err) {
                setError('Failed to fetch data'); // Set error if fetch fails
            }
            setLoading(false); // End loading
        };

        getData(); // Call the data fetch function
    }, [address]); // Re-run effect if the address changes

    // Loading state
    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-light" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // Format the number into a readable format (K, M, B, T)
    const formatNumber = (number) => {
        if (number === undefined || number === null || isNaN(number)) {
            return '$0.00'; // Return a default value if the number is undefined, null, or not a number
        }
        if (number >= 1000000000) {
            return `$${(number / 1000000000).toFixed(2)}B`;  // Format for billions (B)
        } else if (number >= 1000000) {
            return `$${(number / 1000000).toFixed(2)}M`;  // Format for millions (M)
        } else if (number >= 1000) {
            return `$${(number / 1000).toFixed(2)}K`;  // Format for thousands (K)
        }
        return `$${number.toFixed(2)}`;  // For values under 1000, no suffix
    };


    const formatDate = (timestamp) => {
        const date = new Date(timestamp); // Convert milliseconds to a Date object

        // Format the date into MM/DD/YY, hh:mm AM/PM
        const options = {
            month: '2-digit',
            day: '2-digit',
            year: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        };
        return date.toLocaleString('en-US', options);
    };

    const firstTradeDate = data?.tradeData?.[19]?.date;

    // Calculate the market cap for the base and quote tokens
    const baseAsset = data?.pairData;
    const liquidity = baseAsset?.liquidity;
    const volume24h = baseAsset?.volume24h;
    const token0 = baseAsset?.token0;
    const token1 = baseAsset?.token1;

    const formattedLiquidity = formatNumber(liquidity);
    const formattedVolume24h = formatNumber(volume24h);

    const marketCapToken0 = baseAsset?.token0?.circulatingSupply * baseAsset?.token0?.price;
    const marketCapToken1 = baseAsset?.token1?.circulatingSupply * baseAsset?.token1?.price;
    const totalMarketCap = marketCapToken0 + marketCapToken1;
    const formattedMarketCap = formatNumber(totalMarketCap);

    // Calculate price change for different intervals (5min, 1h, 4h, 12h, 24h)
    const calculatePriceChange = (tradeData, intervalInMinutes) => {
        if (!tradeData || tradeData.length === 0) return 0;

        const currentPrice = tradeData[0]?.token_price; // Most recent price
        const pastPrice = tradeData[intervalInMinutes]?.token_price; // Price for the previous interval

        if (currentPrice && pastPrice) {
            return ((currentPrice - pastPrice) / pastPrice) * 100; // Percentage change
        }
        return 0; // Return 0 if no valid price data
    };

    // Calculate price changes for various intervals
    const priceChange5min = calculatePriceChange(data.tradeData, 5);
    const priceChange1h = calculatePriceChange(data.tradeData, 12); // Assuming 12th trade is 1 hour ago
    const priceChange4h = calculatePriceChange(data.tradeData, 24); // Assuming 24th trade is 4 hours ago
    const priceChange12h = calculatePriceChange(data.tradeData, 48); // Assuming 48th trade is 12 hours ago
    const priceChange24h = calculatePriceChange(data.tradeData, 96); // Assuming 96th trade is 24 hours ago

    const formatPriceChange = (change) => {
        return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
    };

    const formatted5min = formatPriceChange(priceChange5min);
    const formatted1h = formatPriceChange(priceChange1h);
    const formatted4h = formatPriceChange(priceChange4h);
    const formatted12h = formatPriceChange(priceChange12h);
    const formatted24h = formatPriceChange(priceChange24h);

    const calculateBuysAndSells = (tradeData) => {
        let totalBuys = 0;
        let totalSells = 0;
        let totalTxns = tradeData.length; // Total transactions is simply the length of the tradeData array

        // Loop through the trade data
        tradeData.forEach((trade) => {
            if (trade.type === 'buy') {
                totalBuys += trade.token_amount_usd;  // Sum up the USD value for buys
            } else if (trade.type === 'sell') {
                totalSells += trade.token_amount_usd;  // Sum up the USD value for sells
            }
        });

        return { totalBuys, totalSells, totalTxns };
    };

    const { totalBuys, totalSells, totalTxns } = calculateBuysAndSells(data?.tradeData || []);

    // Function to calculate the total buy and sell volumes
    const calculateBuyAndSellVolumes = (tradeData) => {
        let totalBuyVolume = 0;
        let totalSellVolume = 0;

        tradeData.forEach((trade) => {
            if (trade.type === 'buy') {
                totalBuyVolume += trade.token_amount_usd || 0;  // Add the USD volume for buys
            } else if (trade.type === 'sell') {
                totalSellVolume += trade.token_amount_usd || 0;  // Add the USD volume for sells
            }
        });

        return { totalBuyVolume, totalSellVolume };
    };

    const { totalBuyVolume, totalSellVolume } = calculateBuyAndSellVolumes(data?.tradeData || []);

    // Calculate the total volume
    const totalVolume = totalBuyVolume + totalSellVolume;

    // Calculate the percentage for buy and sell volumes
    const buyPercentage = totalVolume === 0 ? 0 : (totalBuyVolume / totalVolume) * 100;

    // Format the amounts to display
    const getFormattedAmount = (amount) => {
        if (amount >= 1000000) {
            return `$${(amount / 1000000).toFixed(2)}M`;  // Format for millions (M)
        } else if (amount >= 1000) {
            return `$${(amount / 1000).toFixed(2)}K`;  // Format for thousands (K)
        }
        return `$${amount.toFixed(2)}`;  // For values under 1000, no suffix
    };

    const token0CirculatingSupply = token0?.circulatingSupply || 0;
    const token1CirculatingSupply = token1?.circulatingSupply || 0;

    // Extract data for the Pair Metrics section
    const totalSupplyToken0 = token0CirculatingSupply;
    const totalSupplyToken1 = token1CirculatingSupply;
    const btcPooled = baseAsset?.token0?.approximateReserveToken;
    const ethPooled = baseAsset?.token1?.approximateReserveToken;

    console.log({data})
    // Render the fetched data
    return (
        <div id="page-content-wrapper" class="page-content-wrapper">
            <div class="detailspage centercontent container-fluid main-content px-2">
                <div className='tokenlogosection'>
                    <div className='row'>
                        <div className='col-md-1'><img className='tokenlogo' src={data.pairData?.token0.logo} /></div>
                        <div className='col-md-3'><h2 className='tnames'>{data.pairData?.token0.name} / {data.pairData?.token1.name} </h2></div>
                        <div className='col-md-8'> <h2 className='tnames'>${data.pairData?.volume24h} <span className='volume'>+1.09%</span></h2></div>
                    </div>

                    <table class="table tokentable">
                        <thead>
                            <tr>
                                <th scope="col">Liquidity</th>
                                <th scope="col">Volume</th>
                                <th scope="col">M.Cap</th>
                                <th scope="col">5min</th>
                                <th scope="col">1h</th>
                                <th scope="col">4h</th>
                                <th scope="col">12h</th>
                                <th scope="col">24h</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{formattedLiquidity}</th>
                                <td>{formattedVolume24h}</td>
                                <td>{formattedMarketCap}</td>
                                <td><span className='volumes'>{formatted5min}</span></td>
                                <td><span className='volumes'>{formatted1h}</span></td>
                                <td><span className='volumes'>{formatted4h}</span></td>
                                <td><span className='volumes'>{formatted12h}</span></td>
                                <td><span className='volumes'>{formatted24h}</span></td>
                            </tr>

                        </tbody>
                    </table>

                </div>

                <div className='tokenlogosection'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <div className='chartboxsdetails'>
                                <img className='grap' src='/img/grap.png' />
                            </div>


                            <table class="table tokentable">
                                <thead>
                                    <tr>
                                        <th scope="col">Type</th>
                                        <th scope="col">{token0?.symbol}</th>
                                        <th scope="col">{token1?.symbol}</th>
                                        <th scope="col">Value</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Time</th>
                                        {/* <th scope="col">Explorer</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.tradeData?.map((trade, index) => (
                                        <tr className='rowbox' key={index}>
                                            <th
                                                className={`${trade.type === 'buy' ? 'text-green-500' : 'text-red-500'
                                                    }`}
                                            >
                                                {trade.type === 'buy' ? 'Buy' : 'Sell'}
                                            </th>
                                            <td>{trade.token_amount}</td>
                                            <td>{(trade.token_amount * trade.token_price_vs).toFixed(4)}</td>
                                            <td>${trade.token_amount_usd.toFixed(2)}</td>
                                            <td>${trade.token_price_vs.toFixed(2)}</td>
                                            <td>{formatDate(trade.date)}</td>
                                            {/* <td>
                                                <a
                                                    href={`https://snowtrace.io/tx/${trade.hash}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeWidth="2"
                                                        viewBox="0 0 24 24"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="ml-[15px] md:ml-0 mb-[3px] mr-[7.5px] text-light-font-40 dark:text-dark-font-40"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                                        <polyline points="15 3 21 3 21 9"></polyline>
                                                        <line x1="10" y1="14" x2="21" y2="3"></line>
                                                    </svg>
                                                </a>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </div>



                        <div className='col-md-4'>
                            <div className='chartboxs'>
                                <h2>Trades</h2>
                                <div className='buyselbox'>
                                    <p>Buys   <span>Sells</span></p>
                                    <p> {getFormattedAmount(totalBuys)} <span>{getFormattedAmount(totalSells)}</span></p>
                                    <div className="progress" style={{ backgroundColor: "red", borderRadius: "5px" }}>
                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                                width: `${buyPercentage}%`,
                                                backgroundColor: 'green' // Green for buys
                                            }}
                                            aria-valuenow={buyPercentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {buyPercentage.toFixed(2)}%
                                        </div>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${100 - buyPercentage}%`,
                                                backgroundColor: 'red' // Red for sells
                                            }}
                                            aria-valuenow={100 - buyPercentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {(100 - buyPercentage).toFixed(2)}%
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="buyselbox">
                                    <p>Buys Vol <span>Sells Vol</span></p>
                                    <p>{getFormattedAmount(totalBuyVolume)} <span>{getFormattedAmount(totalSellVolume)}</span></p>

                                    <div className="progress">
                                        <div
                                            className="progress-bar "
                                            role="progressbar"
                                            style={{
                                                width: `${buyPercentage}%`,
                                                backgroundColor: 'green' // Green for buys
                                            }}
                                            aria-valuenow={buyPercentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {buyPercentage.toFixed(2)}%
                                        </div>
                                        <div
                                            className="progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: `${100 - buyPercentage}%`,
                                                backgroundColor: 'red' // Red for sells
                                            }}
                                            aria-valuenow={100 - buyPercentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        >
                                            {(100 - buyPercentage).toFixed(2)}%
                                        </div>
                                    </div>
                                </div>

                                <p>Txns: <span>{totalTxns}</span></p>
                                <p>Volume:: <span>{getFormattedAmount(totalBuyVolume + totalSellVolume)}</span></p>
                            </div>


                            <div className='chartboxs'>
                                <div className='Pairmarket'>
                                    <h2>Pair Metrics</h2>
                                    <p>Total Supply: <span>{totalSupplyToken0 + totalSupplyToken1} {token0?.symbol}</span></p>
                                    <p>{data.pairData?.token0.name} Pooled: <span>{btcPooled} {token0?.symbol}</span></p>
                                    <p>{data.pairData?.token1.name} Pooled: <span>{ethPooled} {token1?.symbol}</span></p>
                                    <p>Liquidity: <span>${liquidity}</span></p>

                                    <p>Volume: <span>${volume24h}</span></p>
                                    <p>Market Cap <span>$2,023,213,317,453.57</span></p>
                                    <p>Pair created at: <span>{firstTradeDate ? formatDate(firstTradeDate) : 'N/A'}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PairShow;
