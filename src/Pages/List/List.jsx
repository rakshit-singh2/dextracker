import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import TokenRow from "../../Components/TokenRow/TokenRow";
import { useParams } from "react-router-dom";


async function getChains(blockchain) {

    // Define Axios requests
    const fetchChain = axios.get(
        `https://production-api.mobula.io/api/1/market/blockchain/stats?blockchain=${blockchain}`
    );

    const fetchPairs = axios.get(
        `https://production-api.mobula.io/api/1/market/blockchain/pairs?blockchain=${blockchain}`
    );

    // Wait for both requests to complete
    const [chain, pairs] = await Promise.all([fetchChain, fetchPairs]);

    // Return processed data
    return {
        blockchain: chain.data.data,
        pairs: pairs.data.data,
    };
}



function List() {
    const { chain } = useParams();
    const [data, setData] = useState({ blockchain: '', pairs: [] });
    console.log({ data })
    // console.log({ 'tokens_history': data.blockchain.tokens_history })
    // console.log({ 'volume_history': data.blockchain.volume_history })
    // console.log({ 'liquidity_history': data.blockchain.liquidity_history })

    useEffect(() => {
        const fetchData = async () => {
            const { blockchain, pairs } = await getChains(chain);
            setData({ blockchain, pairs });
        };

        fetchData();
    }, [chain]);

    return (
        <>
            <Header />
           
            <div id="page-content-wrapper" className="page-content-wrapper">
                <div className="centercontent container-fluid main-content px-2">
                <div className="row chartboxs">
                    <div className="col-6">
                        <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search for token, pair, wallet, ens, token address etc.."/>
                        </div>
                    </div>
                    <div className="col-6">
                        <span className="rightbtn">Connect </span>
                        <span className="rightbtn">Portfolio <i class="fa fa-line-chart" aria-hidden="true"></i></span>
                    </div>
                  </div>

                  <div className="row chartboxs">
                    <div className="col-4">
                    <img id="logo" src="/img/chart1.png" alt="chart1" />
                    </div>
                    <div className="col-4">
                    <img id="logo" src="/img/chart2.png" alt="chart1" />
                    </div>
                    <div className="col-4">
                    <img id="logo" src="/img/chart3.png" alt="chart1" />
                    </div>
                  </div>

                  
                    <div className="col-12">
                        <div className="mainchart px-3 px-md-4 py-3 py-lg-4 ">
                        
                        <h1>{chain.toUpperCase()} Chain</h1>


                            <div className="pb-2 price-table scrollme">
                                <table className="table table-responsive">
                                    <thead>
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

