import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import TokenRow from "../../Components/TokenRow/TokenRow";
import { Link, useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

async function getChains(blockchain) {
    // Define Axios requests
    const fetchChain = axios.get(
        `https://api.mobula.io/api/1/market/blockchain/stats?blockchain=${blockchain}`
    );
    const fetchPairs = axios.get(
        `https://api.mobula.io/api/1/market/blockchain/pairs?blockchain=${blockchain}`
    );
    // Wait for both requests to complete
    const [chain, pairs] = await Promise.all([fetchChain, fetchPairs]);

    // Return processed data
    return {
        blockchain: chain.data.data,
        pairs: pairs.data.data,
    };
}

const blockchainData = {
    data: {
        "volume_history": [
            [1730547465147, 2724230693.887524], [1730553994401, 71538843543.1093], [1730567555671, 977318051.7261567],
            [1730611671253, 1454430336.66462], [1730651409851, 1187479990.360612], [1730665419825, 1134196207.01839],
            [1730685710098, 1240974267.480595], [1730780050845, 1216062741.467925], [1730819847464, 1040917727.281592],
            [1730860749019, 2002579046.83067], [1731030903306, 5034778265.978219], [1731087505287, 5741132926.995619],
            [1731138570908, 1917335806.546125], [1731246842961, 2121550268.227905], [1731467337289, 4679364271.921572],
            [1731469780968, 4759391065.472106], [1731475020392, 5076196730.744006], [1731507461290, 6066748423.722392],
            [1731511797263, 6514351011.626695], [1731518990909, 7846889061.407604], [1731536344994, 6982714977.249576],
            [1731544691174, 7099575122.397147], [1731568949386, 4982612499.189933], [1731578392801, 5175809289.03294],
            [1731596984395, 4511096977.868625], [1731618449874, 3483435811.773465], [1731625312812, 2984410218.790329],
            [1731640601067, 3098137658.145836], [1731644698233, 3131885796.73864], [1731665061866, 2854800623.897614],
            [1731683512889, 2656204137.915462], [1731694459117, 3051960493.191642], [1731698302634, 3129169515.072515],
            [1731718907004, 2511000668.995565], [1731722707092, 2560629716.266626], [1731762334222, 2580334029.333647],
            [1731808077530, 2268504655.56036], [1731838279299, 3052586854.829103], [1731859097989, 3891184785.986831],
            [1731866097075, 3504405816.315094]
        ],
        "volume_change_24h": [0],
        "volume_change_total": 28.63836473827576,
        "liquidity_history": [
            [1730547465146, 1436973621.914164], [1730553994399, 1436406735.245963], [1730567555669, 1434856165.513585],
            [1730611671252, 1420680600.91663], [1730651409850, 1401614554.198207], [1730665419824, 1381093374.373874],
            [1730685710087, 1407170319.854262], [1730780050844, 1382880168.408908], [1730819847463, 1406212574.607985],
            [1730860749018, 1416192598.293202], [1731030903305, 1516813850.405232], [1731087505285, 1539170453.208669],
            [1731138570907, 1561237978.294024], [1731246842960, 1643831726.773679], [1731467337287, 1631911001.039021],
            [1731469780966, 1631238219.148843], [1731475020390, 1604382989.020571], [1731507461277, 1609177447.357297],
            [1731511797262, 1630743999.455681], [1731518990908, 1626963121.234674], [1731536344993, 1631895399.257185],
            [1731544691173, 1634091438.840324], [1731568949385, 1636047531.968355], [1731578392799, 1633112609.14322],
            [1731596984394, 1614079979.525703], [1731618449872, 1605414148.212024], [1731625312811, 1611444427.447733],
            [1731640601066, 1601468338.762417], [1731644698232, 1604477401.195926], [1731665061865, 1609531528.739548],
            [1731683512888, 1593359999.307302], [1731694459112, 1582094361.188411], [1731698302633, 1586131308.608556],
            [1731718907003, 1613484290.31985], [1731722707091, 1620704401.964992], [1731762334220, 1662308315.962764],
            [1731808077529, 1654369644.804942], [1731838279262, 1659005779.115042], [1731859097987, 1683818413.342675],
            [1731866097074, 1677519410.31318]
        ],
        "liquidity_change_24h": 0,
        "liquidity_change_total": 16.73974975814724,
        "tokens_history": [
            [1730547465148, 914], [1730553994402, 919], [1730567555672, 706], [1730611671254, 817], [1730651409852, 791],
            [1730665419826, 791], [1730685710107, 780], [1730780050846, 732], [1730819847466, 738], [1730860749021, 790],
            [1731030903307, 942], [1731087505288, 991], [1731138570910, 828], [1731246842962, 871], [1731467337291, 808],
            [1731469780969, 820], [1731475020393, 825], [1731507461313, 865], [1731511797264, 868], [1731518990911, 884],
            [1731536344996, 910], [1731544691176, 917], [1731568949387, 801], [1731578392803, 815], [1731596984397, 790],
            [1731618449877, 773], [1731625312814, 776], [1731640601069, 808], [1731644698294, 810], [1731665061867, 795],
            [1731683512890, 800], [1731694459118, 822], [1731698302635, 827], [1731718907005, 793], [1731722707093, 802],
            [1731762334223, 784], [1731808077531, 783], [1731838279300, 818], [1731859097990, 777], [1731866097077, 757]
        ],
        "tokens_change_24h": 0,
        "tokens_change_total": -17.177242888402624
    }
};


// Format the data into something usable for a LineChart (map timestamp and value)
const formatLineChartData = (history) => {
    return history.map(([timestamp, value]) => ({
        timestamp: new Date(timestamp).toLocaleString(), // Format timestamp as a readable date
        value
    }));
};

// Custom Tooltip Component
const CustomTooltip = ({ payload, label, active }) => {
    if (active && payload && payload.length) {
        const { value } = payload[0]; // Assuming you only have one series in the chart
        return (
            <div className="custom-tooltip" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: 'white', padding: '10px', borderRadius: '5px' }}>
                <p>{label}</p>
                <p>Volume: {value}</p>
            </div>
        );
    }
    return null;
};


function List() {
    const { chain } = useParams();
    const [data, setData] = useState({ blockchain: '', pairs: [] });
    console.log({ data })
    const lineChartData = formatLineChartData(blockchainData.data.volume_history);
    const lineChartLiquidity = formatLineChartData(blockchainData.data.liquidity_history);
    const lineCharttoken = formatLineChartData(blockchainData.data.tokens_history);

    useEffect(() => {
        const fetchData = async () => {
            const { blockchain, pairs } = await getChains(chain);
            setData({ blockchain, pairs });
        };
        fetchData();
    }, [chain]);


    // const formatChartData = (history) => {
    //     // const xAxisData = history.map(([timestamp]) =>
    //     // new Date(timestamp).toLocaleDateString()
    //     // );

    //     const xAxisData = history.map(([value]) => value);
    //     const yAxisData = history.map(([, value]) => value);
    //     return { xAxisData, yAxisData };
    // };

    // const BNBVolumeData = formatChartData(blockchainData.data.tokens_history);
    // console.log({BNBVolumeData})
    // const BNBActiveTokensData = formatChartData(blockchainData.data.volume_history);
    // const BNBLiquidityData = formatChartData(blockchainData.data.liquidity_history);
    // const BNBVolumeData = formatChartData(data.blockchain.tokens_history);
    // const BNBActiveTokensData = formatChartData(data.blockchain.volume_history);
    // const BNBLiquidityData = formatChartData(data.blockchain.liquidity_history);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const { blockchain, pairs } = await getChains(chain);
    //         setData({ blockchain, pairs });
    //     };

    //     fetchData();
    // }, [chain]);





    // New Chart

    //  const CustomTooltipChart = ({ data }) => {
    //     const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, content: '' });
    //     console.log({tooltip}) 

    //     const handleMouseOver = (event, point) => {
    //         console.log({point})
    //         console.log({event})
    //         setTooltip({
    //             visible: true,
    //             x: event.clientX,
    //             y: event.clientY,
    //             content: `Date: ${point.x}<br/>Value: ${point.y}`,
    //         });
    //     };

    //     const handleMouseOut = () => {
    //         setTooltip({ visible: false, x: 0, y: 0, content: '' });
    //     };

    //     return (
    //         <div style={{ position: 'relative' }}>
    //             <LineChart
    //                 xAxis={[{ data: data.xAxisData }]}
    //                 series={[
    //                     {
    //                         data: data.yAxisData,
    //                         color: '#0e5240',
    //                         area: true,
    //                         onMouseOver: handleMouseOver,
    //                         onMouseOut: handleMouseOut,
    //                     },
    //                 ]}


    //                 height={250}
    //             />
    //             {tooltip.visible && (
    //                 <div
    //                     style={{
    //                         position: 'absolute',
    //                         top: tooltip.y,
    //                         left: tooltip.x,
    //                         backgroundColor: 'white',
    //                         border: '1px solid #ccc',
    //                         padding: '5px',
    //                         pointerEvents: 'none',
    //                     }}
    //                 >
    //                     <div dangerouslySetInnerHTML={{ __html: tooltip.content }} />
    //                 </div>
    //             )}
    //         </div>
    //     );
    // };

    return (
        <>
            <Header />
            <div id="page-content-wrapper" className="page-content-wrapper">
                <div className="centercontent container-fluid main-content px-2">
                    <div className="row chartboxs">
                        <div className="col-6">
                            <div className="form-group has-search">
                                <span className="fa fa-search form-control-feedback"></span>
                                <input type="text" className="form-control" placeholder="Search for token, pair, wallet, ens, token address etc.." />
                            </div>
                        </div>
                        <div className="col-6">
                            <span className="rightbtn">Connect </span>
                            <span className="rightbtn">Portfolio <i className="fa fa-line-chart" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className="row text-black">
                        <div className="col-4">
                            <div className="">
                                <h6>BNB - Volume History</h6>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={lineChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="timestamp" tick={{ fill: '#fff' }} stroke="#000" />
                                        <YAxis
                                            tick={{ fill: '#fff' }}
                                            stroke="#000"
                                            tickFormatter={(value) => {
                                                // Convert value to string, slice first 4 digits and return it
                                                return Math.floor(value).toString().slice(0, 4);
                                            }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ color: '#000' }} />
                                        <Line type="monotone" dataKey="value" stroke="#0e5240" />
                                        <ReferenceLine y={0} stroke="#fff" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="text-white">
                                <h6>BNB - Liquidity History</h6>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={lineChartLiquidity}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="timestamp" tick={{ fill: '#fff' }} stroke="#000" />
                                        <YAxis
                                            tick={{ fill: '#fff' }}
                                            stroke="#000"
                                            tickFormatter={(value) => {
                                                // Convert value to string, slice first 4 digits and return it
                                                return Math.floor(value).toString().slice(0, 4); //Only first 4 digits of the integer part
                                            }}
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ color: '#000' }} />
                                        <Line type="monotone" dataKey="value" stroke="#0e5240" />
                                        <ReferenceLine y={0} stroke="#fff" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="">
                                <h6>BNB - Token chart</h6>
                                <ResponsiveContainer width="100%" height={200}>
                                    <LineChart data={lineCharttoken}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="timestamp" tick={{ fill: '#fff' }} stroke="#000" />
                                        <YAxis tick={{ fill: '#fff' }} stroke="#000" />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend wrapperStyle={{ color: '#000' }} />
                                        <Line type="monotone" dataKey="value" stroke="#0e5240" />
                                        <ReferenceLine y={0} stroke="#fff" />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="mainchart px-3 px-md-4 py-3 py-lg-4 ">
                            <h1>{chain} Chain</h1>
                            <div className="pb-2 price-table scrollme">
                                <table className="table table-responsive">
                                    <thead className="fixed">
                                        <tr>
                                            <th className="fw-bold">Logo</th>
                                            <th className="fw-bold">Token0/Token1</th>
                                            <th className="fw-bold">Price</th>
                                            <th className="fw-bold">Price Change 1h</th>
                                            <th className="fw-bold">Price Change 4h</th>
                                            <th className="fw-bold">Price Change 5min</th>
                                            <th className="fw-bold">Price Change 24h</th>
                                            <th className="fw-bold">Trades 1h</th>
                                            <th className="fw-bold">Trades 1min</th>
                                            <th className="fw-bold">Trades 4h</th>
                                            <th className="fw-bold">Trades 5min</th>
                                            <th className="fw-bold">Trades 12h</th>
                                            <th className="fw-bold">Trades 15min</th>
                                            <th className="fw-bold">Trades 24h</th>
                                            <th className="fw-bold">Volume 1h</th>
                                            <th className="fw-bold">Volume 1min</th>
                                            <th className="fw-bold">Volume 4h</th>
                                            <th className="fw-bold">Volume 5min</th>
                                            <th className="fw-bold">Volume 12h</th>
                                            <th className="fw-bold">Volume 15min</th>
                                            <th className="fw-bold">Volume 24h</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            data && data.pairs && data.pairs.length > 0 ? (
                                                data.pairs.map((pairs, index) => (
                                                    <TokenRow key={index} pool={pairs} />
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="11">No tokens available or loading...</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;
