import React from 'react'

const Header = ({ setSwap }) => {
  return (
    <div className='page-content-wrapper'>
      <nav className="navbar navbar-expand-lg py-lg-3 px-2 px-lg-4 d-flex fixed-top justify-content-between">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center d-lg-none">
            <span className="material-symbols-outlined menu-toggle" id="menu-toggle">
              menu
            </span>
          </div>
        </div>
        <div className='col-md-12 topmenu'>
          <div className="justify-content-end">

            <div className="row">
              <div className="col-md-10">
                <ul className="allchain">
                  <li className="firstchaindiv">All Swap</li>
                  <li><a onClick={setSwap('UniswapV3')}><img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png" style={{ width: "22px", height: "22px" }}alt="" /> UniswapV3</a></li>
                  <li><a href='#'><img src="img/crypto/dash.png" alt="" /> Dash</a></li>
                  <li><a href='#'><img src="img/crypto/dogecoin.png" alt="" /> Dogecoin</a></li>
                  <li><a href='#'><img src="img/crypto/ellaism.png" alt="" /> Ellaism</a></li>
                  <li><a href='#'><img src="img/crypto/monero.png" alt="" /> Monero</a></li>
                  <li><a href='#'><img src="img/crypto/ripple.png" alt="" /> Ripple</a></li>
                </ul>


              </div>
              <div className="col-md-2 drpbox">
                <div className="dropdown">
                  <button className="dropbtn">More <i className="fa fa-angle-down"></i></button>
                  <div className="dropdown-content">
                    <a href="#"><img src="img/crypto/tron.png" alt="" /> Tron</a>
                    <a href="#"><img src="img/crypto/binance.png" alt="" /> binance</a>
                    <a href="#"><img src="img/crypto/digibyte.png" alt="" /> digibyte</a>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>

      </nav>
    </div>
  )
}

export default Header