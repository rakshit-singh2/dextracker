import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
];

const Watchlist = () => {
  return (
    
<div id="page-content-wrapper" className="page-content-wrapper main-content">
          <div className="row mainchart px-3 px-md-4 py-3 py-lg-4">
          <div className="col-8">

             <div className='chartbox'>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="2 2" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#3ebf81" />
                      <Bar dataKey="profit" fill="#ff6c00" />
                    </BarChart>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#3ebf81" />
                        <Line type="monotone" dataKey="profit" stroke="#ff6c00" />
                      </LineChart>
                    </ResponsiveContainer>
                  </ResponsiveContainer>
                  </div>



            <div className="mainchart">
              
              <div className="pb-2 pt-3 price-table watchlist">
             
                <table>
                  <thead>
                    <tr>
                      <th className="fw-bold">Date</th>
                      <th className="fw-bold">Type</th>
                      <th className="fw-bold">USD</th>
                      <th className="fw-bold">Major</th>
                      <th className="fw-bold">Sol</th>
                      <th className="fw-bold">Price</th>
                      <th className="fw-bold">Maker</th>
                      <th className="fw-bold">TXN</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      0s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='sell'>
                      <td className="d-flex align-items-center gap-2">
                      2s ago
                      </td>
                      <td>Sell</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      3s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      4s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='sell'>
                      <td className="d-flex align-items-center gap-2">
                      5s ago
                      </td>
                      <td>Sell</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      6s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='sell'>
                      <td className="d-flex align-items-center gap-2">
                      7s ago
                      </td>
                      <td>Sell</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      8s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      8s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      9s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      12s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      13s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>
                    <tr className='buy'>
                      <td className="d-flex align-items-center gap-2">
                      14s ago
                      </td>
                      <td>Buy</td>
                      <td>293.03</td>
                      <td>3,342.56</td>
                      <td>0.3614</td>
                      <td>$0.04031</td>
                      <td>jszEJ3</td>
                      <td><i className='fa fa-line-chart'></i></td>
                    </tr>

                     
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-xxl-4 exchange-tab">

          <div className="doughnut twitter">
          <p className='pm'>ICAT <i className="fa fa-files-o" aria-hidden="true"></i> &nbsp; / &nbsp; WETH <i className="fa fa-envira" aria-hidden="true"></i>  
          &nbsp; <span className='hour'>19h</span></p>
          <p><img className='blogo' src="img/eth.png" alt=""/> Ethereum  &nbsp; <i className="fa fa-angle-right" aria-hidden="true"></i>  &nbsp; <img className='blogo' src="img/uniswap.png" alt=""/> Uniswap  &nbsp;VS</p>
          <img className='banner' src="img/promotions/promo_2.png" alt=""/>

          <button type="button" className="btn Embed"><i className="fa fa-exchange" aria-hidden="true"></i> Trade on Uniswap </button>
          

          </div>


          <div className="mainchart px-3 px-md-4 py-3 py-lg-4  pair">
            
            <div className="tab-content" id="pills-tabContent2">
              <div className="tab-pane fade show active" id="price" role="tabpanel" tabindex="0">
                <div className="recent-contact">
                  <table>
                    
                    <tbody>
                      <tr className="border-b2">
                        <td>Pair created</td>
                        <td>20h 56m ago</td>
                        
                        
                      </tr>
                      <tr className="border-b2">
                        <td>Pooled ICAT</td>
                        <td>48,384,342   $7</td>
                        
                        
                      </tr>
                      <tr className="border-b2">
                        <td>Pooled WETH</td>
                        <td>0.001991   $7</td>
                        
                        
                      </tr>
                      <tr className="border-b2">
                        <td>Pair</td>
                        <td>EXP</td>
                        
                        
                      </tr>
                      <tr className="border-b2">
                        <td>ICAT</td>
                        <td>EXP</td>
                      </tr>

                      <tr className="border-b2">
                        <td>WETH</td>
                        <td>EXP</td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="deep" role="tabpanel" tabindex="0">
                <div className="recent-contact pb-2 pt-3">
                  <table>
                    <thead>
                      <tr className="border-b2">
                        <th className="fw-bold">Time</th>
                        <th className="fw-bold">Price (USDT)</th>
                        <th className="fw-bold">Amount (BTC)</th>
                        <th className="fw-bold">Total (USDT) </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b2">
                        <td>14:00</td>
                        <td>$281.68</td>
                        <td>25,143 BTC</td>
                        <td>$1686.7</td>
                      </tr>
                      <tr className="border-b2">
                        <td>12:00</td>
                        <td>$211.68</td>
                        <td>24,9753 BTC</td>
                        <td>$1586.67</td>
                      </tr>
                      <tr className="border-b2">
                        <td>21:00</td>
                        <td>$278.68</td>
                        <td>2473 BTC</td>
                        <td>$166.67</td>
                      </tr>
                      <tr className="border-b2">
                        <td>10:00</td>
                        <td>$241.68</td>
                        <td>75,973 BTC</td>
                        <td>$7486.67</td>
                      </tr>
                      <tr className="border-b2">
                        <td>13:00</td>
                        <td>$224.68</td>
                        <td>5473 BTC</td>
                        <td>$1286.67</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>



          <div className="doughnut twitter">
          

          <img className='blogo' src="img/blogo.png" alt=""/>
          <h5 className="text-whit mb-3">Digital Cat</h5>
          <hr></hr>
          <ul>
            <li><span className="custom-i6bazn"><i className="fa fa-globe"></i> Website</span></li>
            <li><span className="custom-i6bazn"><i className="fa fa-twitter"></i> Twitter</span></li>
            <li><span className="custom-i6bazn"><i className="fa fa-telegram"></i> Telegram</span></li>
          </ul>

          <p>Mistakes were made Sept. 6, 2013 | 11:27 pm EST…</p>

          <p>A camera captured an intriguing photo of a frog as NASA’s LADEE spacecraft lifts off at Wallops Flight Facility</p>

          <p>Was this an accident? $MAJOR knows</p>
          </div>


          <div className="doughnut RecentTransaction">
              <div className="exlist">
              <input value={2} type="search" id="gsearch" name="gsearch"/>
              <input className="tname" type="submit" value="ICAT"/>
              </div>

              <div className="exlist exchange">
              <i className="fa fa-random" aria-hidden="true"></i>
              </div>

              <div className="exlist">
              <input value={0.0000003226} type="search" id="valuebox" name="gsearch"/>
              <input className="tnamevlue" type="submit" value="&#10004; USD"/>
              <input className="tname" type="submit" value="&#10004; WETH"/>
              </div>
              <hr className="hr" />
              
              <button type="button" className="btn Embed"><i className="fa fa-code" aria-hidden="true"></i> Embed this chart</button>
              <p className='TradingView'><a href='#'>Crypto charts by TradingView</a></p>

            </div>
      </div>
    </div>
</div>

  )
}

export default Watchlist