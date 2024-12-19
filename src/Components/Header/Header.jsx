import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setSwap }) => {
  const navigate = useNavigate();
  return (
    <div className="page-content-wrapper">
      <nav className="navbar navbar-expand-lg py-lg-3 px-2 px-lg-4 d-flex fixed-top justify-content-between">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center d-lg-none">
            <span className="material-symbols-outlined menu-toggle" id="menu-toggle">
              menu
            </span>
          </div>
        </div>
        <div className="col-md-12 topmenu">
          <div className="justify-content-end">
            <div className="row">
              <div className="col-md-10">
                <ul className="allchain">
                  <li className="firstchaindiv">All Swap</li>
                  <li>
                    <a onClick={() => {setSwap('UniswapV3'); navigate(`/uniswapv3-etherium`)}}>
                      <img
                        src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
                        style={{ width: "22px", height: "22px" }}
                        alt=""
                      /> UniswapV3
                    </a>
                  </li>
                  <li>
                    <a onClick={() => {setSwap('UniswapV2'); navigate(`/uniswapv2-etherium`)}}>
                      <img
                        src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png"
                        style={{ width: "22px", height: "22px" }}
                        alt=""
                      /> UniswapV2
                    </a>
                  </li>
                  <li>
                    <a onClick={() => {setSwap('PancakeSwapV2'); navigate(`/pancakeswap-etherium`)}}>
                      <img
                        src="https://docs.pancakeswap.finance/~gitbook/image?url=https%3A%2F%2F2612825755-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fcollections%252F-MHREX7DHcljbY5IkjgJ%252Ficon%252FW38rmBbaxxiYbRRRJfLW%252FGroup%252053654.png%3Falt%3Dmedia%26token%3Dfebc62b9-a084-4928-b23b-1f3cb931b7c9&width=32&dpr=4&quality=100&sign=4e091a0d&sv=2"
                        style={{ width: "22px", height: "22px", borderRadius: "50%" }}
                        alt=""
                      /> PancakeSwapV2
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 drpbox">
                <div className="dropdown">
                  <button className="dropbtn">More <i className="fa fa-angle-down"></i></button>
                  <div className="dropdown-content">
                    <a href="#"><img src="img/crypto/tron.png" alt="" />Tron</a>
                    <a href="#"><img src="img/crypto/binance.png" alt="" />Binance</a>
                    <a href="#"><img src="img/crypto/digibyte.png" alt="" />Digibyte</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
