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
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-etherium">
              <img src="img/crypto/etherium.png" alt="Ethereum logo" style={{ width: "22px", height: "22px" }} />
              <span className="fw-semibold">Ethereum</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-optimism">
              <img src="https://icons.llamao.fi/icons/chains/rsz_optimism.jpg" alt="Optimism logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Optimism</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-bsc">
              <img src="https://icons.llamao.fi/icons/chains/rsz_binance.jpg" alt="BSC logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Binance Smart Chain</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-polygon">
              <img src="https://icons.llamao.fi/icons/chains/rsz_polygon.jpg" alt="Polygon logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Polygon</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-base">
              <img src="https://icons.llamao.fi/icons/chains/rsz_base.jpg" alt="Base logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Base</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-avalanche">
              <img src="https://icons.llamao.fi/icons/chains/rsz_avalanche.jpg" alt="Avalanche logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Avalanche</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-cello">
              <img src="https://icons.llamao.fi/icons/chains/rsz_celo.jpg" alt="Celo logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Celo</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-arbitrum">
              <img src="https://icons.llamao.fi/icons/chains/rsz_arbitrum.jpg" alt="Arbitrum logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Arbitrum</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/uniswapv3-etherium">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcExYmddlgeAu1r5Irc5Hrc2JU/WKVPYj6q1reeMl5bOJUfWUSP0k5rNQndRcjdsd9KU4xsR9YO5pfOIt2b1DtctJqs9ybugVOp/+AAAAC3RSTlMAHE9DQ09NMjJDT2HHxPcAAACSSURBVCiRxdDBDoMgEEVRUMtUoFpB5f//tIPTyJOkpJumd3uCPlDqf+l7Fdiwbcuyrg/uKRWlad+vWkzPEyqzLRbnSosp3XE3yeZwTTszHg25nsOT5EJIUX4sV7JN7T+ojMYvG+dCSqgaz75HySqehdiMzFF3vgecNN7lYLQG4y5ajLyvlGo7NcUR11R9fY0f9AL+uBAN6GmI1QAAAABJRU5ErkJggg==" alt="Solana logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
              <span className="fw-semibold">Solana</span>
            </Link>
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
