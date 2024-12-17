import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ setChain, setSwap }) => {
  return (
    <div id="sidebar-wrapper" className="sidebar-wrapper">
      <div className="sidebar-heading">
        <Link to="/">
          <img id="logo" src="img/logo.png" alt="Logo" />
        </Link>

      </div>
      <nav className="sidebar mb-4">
        <ul className="nav flex-column" id="nav_accordion">
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/watchlist">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Watchlist</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/alerts">
              <i className="fa fa-bell"></i>
              <span className="fw-semibold">Alerts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/multicharts">
              <i className="fa fa-th-large"></i>
              <span className="fw-semibold">Multicharts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/new-pairs">
              <i className="fa fa-envira"></i>
              <span className="fw-semibold">New Pairs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/gainers-losers">
              <i className="fa fa-exchange"></i>
              <span className="fw-semibold">Gainers & Losers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/portfolio">
              <i className="fa fa-suitcase"></i>
              <span className="fw-semibold">Portfolio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/api">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Watchlist</span>
            </Link>
          </li>
          <li className="nav-item">
            <button
              className="nav-link d-flex gap-2 align-items-center"
              onClick={() => {setChain('1'); setSwap('UniswapV3')}}
            >
              <img src="img/crypto/etherium.png" alt="Ethereum logo" style={{ width: "22px", height: "22px" }} />
              <span className="fw-semibold">Etherium</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link d-flex gap-2 align-items-center"
              onClick={() => {setChain('42161'); setSwap('UniswapV3')}}
            >
              <img src="img/crypto/arbtrum.svg" alt="Arbitrum logo" style={{ width: "22px", height: "22px" }}  />
              <span className="fw-semibold">Arbitrum</span>
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link d-flex gap-2 align-items-center"
              onClick={() => {setChain('42161'); setSwap('UniswapV3')}}
            >
              <img src="img/crypto/matic.svg" alt="Polygon logo" style={{ width: "22px", height: "22px" }}  />
              <span className="fw-semibold">Polygon</span>
            </button>
          </li>

          <li className="nav-item sociallink">
            <a className="sl" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="sl" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a className="sl" href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-telegram"></i>
            </a>
            <a className="sl" href="https://reddit.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-reddit"></i>
            </a>
            <a className="sl" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
