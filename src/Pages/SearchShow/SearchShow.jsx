import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Search from "../../Components/Search/Search"
import PriceChart from '../../Components/PriceTradeChartSeach/PriceChart'; // Import your SearchTradeChart component
import { BeatLoader } from 'react-spinners';
import SearchTradeChart from '../../Components/SearchTradeChart/SearchTradeChart';

export default function SearchShow() {
    const { name } = useParams();

    const [results, setResults] = useState([]);
    const [metadata, setMetadata] = useState(null);  // State for metadata
    const [history, setHistory] = useState([]);  // State for historical data
    const [loading, setLoading] = useState(true);  // Set initial loading to true
    const [error, setError] = useState(null);
    const [showAllTags, setShowAllTags] = useState(false);

    const [lowPrice, setLowPrice] = useState(null);
    const [highPrice, setHighPrice] = useState(null);

    const [activeChart, setActiveChart] = useState('price');  // State for managing active chart (Price/Trading)

    // Fetch the data when the component mounts or `name` changes
    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                // Fetch market data
                const marketResponse = await fetch(`https://api.mobula.io/api/1/market/data?asset=${name}`);
                if (!marketResponse.ok) {
                    throw new Error('Failed to fetch market data');
                }
                const marketData = await marketResponse.json();
                setResults(marketData.data);  // Set market data

                // Fetch metadata data
                const metadataResponse = await fetch(`https://api.mobula.io/api/1/metadata?asset=${name}`);
                if (!metadataResponse.ok) {
                    throw new Error('Failed to fetch metadata');
                }
                const metadataData = await metadataResponse.json();
                setMetadata(metadataData.data);  // Set metadata

                // Fetch historical data
                const historyResponse = await fetch(`https://api.mobula.io/api/1/market/history?asset=${name}`);
                if (!historyResponse.ok) {
                    throw new Error('Failed to fetch historical data');
                }
                const historyData = await historyResponse.json();
                setHistory(historyData.data);  // Set historical data

            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [name]);

    // Log results when they change
    useEffect(() => {
        if (results) {
            console.log("Results", results);
        }
    }, [results]);

    useEffect(() => {
        if (metadata) {
            console.log("Meta Data", metadata)
        }
    }, [metadata]);

    useEffect(() => {
        if (history) {
            console.log(history)
        }
    }, [history]);

    const formatNumber = (number) => {
        if (number === undefined || number === null || isNaN(number)) {
            return '0.00';
        }
        return number.toLocaleString();  // Formats the number with commas
    };

    const handleSeeMoreClick = () => {
        setShowAllTags(!showAllTags);
    };

    useEffect(() => {
        if (history && history.price_history) {
            // Get current time
            const currentTime = Date.now();

            // Filter the price history data for the last hour (3600000 ms = 1 hour)
            const lastHourData = history.price_history.filter(item => {
                return currentTime - item[0] <= 86400000;  // 1 hour in milliseconds
            });

            // Calculate the lowest and highest prices in the last hour data
            const prices = lastHourData.map(item => item[1]);
            setLowPrice(Math.min(...prices));
            setHighPrice(Math.max(...prices));
        }
    }, [history]);

    const calculateProgress = () => {
        if (highPrice !== null && lowPrice !== null && results.price) {
            const progress = ((results.price - lowPrice) / (highPrice - lowPrice)) * 100;
            return Math.min(Math.max(progress, 0), 100);
        }
        return 0;
    };

    // Function to toggle between the charts
    const handleChartSwitch = (chartType) => {
        setActiveChart(chartType);
    };

    return (
        <>
            {loading ? <>
                <div className="page-content-wrapper h-screen mt-4 spinner-overlay flex justify-center items-center">
                    <BeatLoader color="#3498db" size={30} />
                </div>
            </> : error ? <p>{error}</p> : (

                <div className='page-content-wrapper mt-4'>
                    <div className="col-6">
                        <Search />
                    </div>
                    <div className="tokendetailspage row px-3 px-md-4 py-3 py-lg-4 ">

                        <div className='col-md-5 tokendetails'>
                            <h1><img className="dlogo" src={results.logo ? results.logo : '/img/tokenlogo/ethereum.png'} alt="Logo" /> {results.name} <span>({results.symbol})</span> <span className='hastag'>#{results.rank}</span></h1>
                            <p>
                                <span className='price'>${formatNumber(results.price)} </span>
                                <span className='priceup'>{formatNumber(results.price_change_24h)}</span>
                                <span className='time'>24H</span>
                            </p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar"
                                    style={{ width: `${calculateProgress()}%` }}
                                    aria-valuenow={calculateProgress()}
                                    aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                            <span className='low'>Low <b>${lowPrice !== null ? formatNumber(lowPrice) : 'N/A'}</b></span>
                            <span className='high'>High <b>${highPrice !== null ? formatNumber(highPrice) : 'N/A'}</b></span>
                        </div>

                        <div className='col-md-7 tag'>
                            {metadata.tags && metadata.tags.length > 0 && (
                                <div>
                                    <h3>Tags</h3>
                                    <ul className='moretag'>
                                        {metadata.tags.slice(0, showAllTags ? metadata.tags.length : 4).map((tag, index) => (
                                            <li key={index}>{tag}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}


                            {/* "See More" button */}
                            {metadata.tags.length > 4 && (
                                <h3
                                    className="mouse-hover"
                                    onClick={handleSeeMoreClick}
                                    style={{ cursor: 'pointer' }} // Adds a pointer cursor to indicate it's clickable
                                >
                                    {showAllTags ? 'See Less' : 'See More'}
                                </h3>
                            )}

                            <ul>
                                <Link to={metadata.website} target='_blank'><li><i className="fa fa-link"></i> Website</li></Link>
                                <li className='contracts'>
                                    <i className="fa fa-search"></i> Contracts <i className="fa fa-angle-down"></i>

                                    <ul className='subnav mt-2'>
                                        {metadata.blockchains.map((blockchain, index) => (
                                            <li key={index}>
                                                <a href='#'>
                                                    {blockchain}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>


                                </li>

                                <li className='contracts'>
                                    <i className="fa fa-user"></i> Community <i className="fa fa-angle-down"></i>
                                    <ul className='subnav mt-2'>
                                        {metadata && [
                                            { name: 'Twitter', url: metadata.twitter, icon: 'fa-twitter' },
                                            { name: 'Discord', url: metadata.discord, icon: 'fa-simplybuilt' },
                                            { name: 'Chat', url: metadata.chat, icon: 'fa-comment' }
                                        ].map((social, index) => (
                                            social.url ? (
                                                <li key={index}>
                                                    <a href={social.url} target='_blank'>
                                                        <i className={`fa ${social.icon}`}></i> {social.name}
                                                    </a>
                                                </li>
                                            ) : null
                                        ))}
                                    </ul>

                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="tokendetailspage row px-3 px-md-4 py-3 py-lg-4 ">

                        <div className='col-md-8'>
                            <div className='dtab'>
                                <button
                                    onClick={() => handleChartSwitch('price')}
                                    className={activeChart === 'price' ? 'active' : ''}
                                >
                                    Price Chart
                                </button>
                                <button
                                    onClick={() => handleChartSwitch('trading')}
                                    className={activeChart === 'trading' ? 'active' : ''}
                                >
                                    Trading Chart
                                </button>
                            </div>

                            {/* Conditionally render the active chart */}
                            {activeChart === 'price' ? (
                                <PriceChart priceHistory={history.price_history} historyName={history.name} historySymbol={history.symbol} />
                            ) : (
                                <SearchTradeChart priceHistory={history.price_history} historyName={history.name} historySymbol={history.symbol} />
                            )}

                            <div className='tinfo'>
                                <h3>About {results.name} <span className='text-sm'>({results.symbol})</span></h3>
                                <p>{metadata.description}</p>
                            </div>
                        </div>

                        <div className='col-md-4'>
                            <div className='TokenMetrics'>
                                <h3>Token Metrics</h3>
                                <ul>
                                    <li><b>Total Volume</b> <span>{`$${formatNumber(results.volume)}`}</span></li>
                                    <li><b>Market Cap </b> <span>{`$${formatNumber(results.market_cap)}`}</span></li>
                                    <li><b>Fully Diluted Val.</b> <span>{`$${formatNumber(results.market_cap_diluted)}`}</span></li>
                                    <li><b>CEX Volume (24h)</b> <span>{`$${formatNumber(results.volume_7d)}`}</span></li>
                                    <li><b>DEX Volume (24h)</b> <span>{`$${formatNumber(results.volume_7d)}`}</span></li>
                                    <li><b>Liquidity</b> <span>{`$${formatNumber(results.liquidity)}`}</span></li>
                                    <li><b>Circ. Supply</b> <span>{`${formatNumber(results.circulating_supply)} ${results.symbol}`}</span></li>
                                    <li><b>Total Supply</b> <span>{`${formatNumber(results.total_supply)} ${results.symbol}`}</span></li>
                                    <li><b>Rank</b> <span>{results.rank}</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}