import React from "react";


const Home = () => {
  return (
    <div id="page-content-wrapper" className="page-content-wrapper">
      <div className="centercontent container-fluid main-content px-2">
      <div className="col-12">
            <div className="mainchart px-3 px-md-4 py-3 py-lg-4 ">
            
                <div className="lang-select d-flex justify-content-left">
               
                <div className="nice-select" tabindex="0">
                <span className="current"><i className="fa fa-clock-o" aria-hidden="true"></i> Last 24 hours</span>
                <ul className="list">
                <li data-value="english" className="option selected">English</li>
                <li data-value="bangla" className="option">Bangla</li>
                <li data-value="arabic" className="option">Arabic</li>
                </ul>
                </div>


                <button className="gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-fire" aria-hidden="true"></i> Trending
                <span><a href="#">5M</a></span>
                <span><a href="#">1H</a></span>
                <span><a href="#">6H</a></span>
                <span><a href="#">24H</a></span>
                </button>
                <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-bar-chart" aria-hidden="true"></i> Top</button>
                <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-arrow-up" aria-hidden="true"></i> Gainers</button>
                
                <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-rocket" aria-hidden="true"></i> New Pairs</button>
                
                <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-diamond" aria-hidden="true"></i> Rank by: <i className="fa fa-arrow-down"></i> Trending 6H</button>
                
                <button className="top gcolor nav-link outline-btn-big py-2 active" id="pills-deep-tab" data-bs-toggle="pill" data-bs-target="#exchange" type="button" role="tab" aria-selected="true"><i className="fa fa-sliders" aria-hidden="true"></i> Filters</button>
                
                </div>
                
             
              <div className="pb-2 pt-3 price-table">
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Token</th>
                      <th className="fw-bold">Price</th>
                      <th className="fw-bold">Age</th>
                      <th className="fw-bold">Txns</th>
                      <th className="fw-bold">Volume</th>
                      <th className="fw-bold">Makers</th>
                      <th className="fw-bold">5M</th>
                      <th className="fw-bold">1h</th>
                      <th className="fw-bold">5h</th>
                      <th className="fw-bold">24h</th>
                      <th className="fw-bold">Liquidity</th>
                      <th className="fw-bold">MCAP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/bitcoin.png`} alt="" />
                        Bitcoin (BTC)
                      </td>
                      <td>$326,600</td>
                      <td>20h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>24.123</td>
                      <td className="primary">+0.33%</td>
                      <td className="text-danger">+1.33%</td>
                      <td className="primary">+2.33%</td>
                      <td className="primary">+5.33%</td>
                      <td>$362K</td>
                      <td>$4.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/binance.png`} alt="" />
                       
                        Binance (BNB)
                      </td>
                      <td>$326,600</td>
                      <td>21h0</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>20.123</td>
                      <td className="primary">+0.33%</td>
                      <td className="primary">+0.35%</td>
                      <td className="primary">+1.30%</td>
                      <td className="text-danger">+3.33%</td>
                      <td>$362K</td>
                      <td>$5.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/dash.png`} alt="" />
                        
                        Dashcoin (DTC)
                      </td>
                      <td>$326,600</td>
                      <td>24h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>24.123</td>
                      <td className="text-danger">+0.32%</td>
                      <td className="primary">+0.35%</td>
                      <td className="primary">+1.33%</td>
                      <td className="primary">+3.35%</td>
                      <td>$362K</td>
                      <td>$2.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/digibyte.png`} alt="" />
        
                        Digibyte (DGB)
                      </td>
                      <td>$326,600</td>
                      <td>10h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>28.123</td>
                      <td className="primary">+0.32%</td>
                      <td className="text-danger">+0.36%</td>
                      <td className="primary">+1.30%</td>
                      <td className="primary">+3.38%</td>
                      <td>$362K</td>
                      <td>$3.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/dogecoin.png`} alt="" />
       
                        Dogecoin (DOGE)
                      </td>
                      <td>$326,600</td>
                      <td>15h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>25.123</td>
                      <td className="primary">+0.33%</td>
                      <td className="primary">+0.35%</td>
                      <td className="text-danger">+1.30%</td>
                      <td className="primary">+3.33%</td>
                      <td>$462K</td>
                      <td>$6.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/ellaism.png`} alt="" />
                       
                        Ellasiam (ELLA)
                      </td>
                      <td>$326,600</td>
                      <td>18h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>27.123</td>
                      <td className="primary">+0.33%</td>
                      <td className="primary">+0.35%</td>
                      <td className="primary">+1.30%</td>
                      <td className="primary">+3.33%</td>
                      <td>$762K</td>
                      <td>$4.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/etherium.png`} alt="" />
                   
                        Ethereum (ETH)
                      </td>
                      <td>$326,600</td>
                      <td>23h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>20.123</td>
                      <td className="primary">+0.33%</td>
                      <td className="primary">+0.35%</td>
                      <td className="primary">+1.30%</td>
                      <td className="text-danger">+3.33%</td>
                      <td>$662K</td>
                      <td>$2.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/monero.png`} alt="" />
          
                        Monero (MNR)
                      </td>
                      <td>$326,600</td>
                      <td>21h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>25.123</td>

                      <td className="primary">+0.33%</td>
                      <td className="primary">+0.35%</td>
                      <td className="primary">+1.30%</td>
                      <td className="primary">+3.33%</td>
                      <td>$362K</td>
                      <td>$1.1M</td>
                    </tr>
                    <tr>

                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/tron.png`} alt="" />
                        Troncoin (TRN)
                      </td>
                      <td>$377,600</td>
                      <td>17h</td>
                      <td>26.123</td>
                      <td>$112,423</td>
                      <td>28.123</td>

                      <td className="primary">+1.33%</td>
                      <td className="text-danger">+2.35%</td>
                      <td className="primary">+3.30%</td>
                      <td className="primary">+4.33%</td>
                      <td>$362K</td>
                      <td>$2.1M</td>
                    </tr>
                    <tr>
                      <td className="d-flex align-items-center gap-2">
                      <img src={`public/img/crypto/tether.png`} alt="" />
                        Tether (USDT)
                      </td>
                      <td>$326,600</td>
                       <td>14h</td>
                      <td>26.123</td>
                      <td>$880,423</td>
                      <td>27.123</td>

                      <td className="primary">+1.33%</td>
                      <td className="primary">+2.35%</td>
                      <td className="primary">+3.30%</td>
                      <td className="primary">+5.33%</td>
                      <td>$662K</td>
                      <td>$4.1M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default Home;
