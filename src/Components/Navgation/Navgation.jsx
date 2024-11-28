import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
            <form className="d-flex align-items-center search-form p-2" role="search">
              <input type="text" placeholder="Search..." aria-label="Search" />
              <span className="material-symbols-outlined">search</span>
            </form>
          </li>

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
            <Link className="nav-link d-flex gap-2 align-items-center" to="/advertise">
              <i className="fa fa-window-maximize"></i>
              <span className="fw-semibold">Advertise</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/api">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Watchlist</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/api">
              <i className="fa fa-code"></i>
              <span className="fw-semibold">API</span>
            </Link>
          </li>

          <li className="nav-item has-submenu">
           <a className="nav-link d-flex justify-content-between align-items-center" href="#">
              <span className="d-flex align-items-center gap-2">
                <i className="fa fa-list-ul"></i>
                <span className="fw-semibold">More</span>
              </span>
              <span className="material-symbols-outlined">
                arrow_drop_down
              </span>
            </a>
            <ul className="submenu collapse ps-2">
             <li className="mt-2">
                 <a className="nav-link" href="#">
                  <img src={`img/crypto/bitcoin.png`} alt="" /> Bitcoin (BTC)
                  </a>
              </li>
              <li className="mt-2">
                 <a className="nav-link" href="#">
                  <img src={`img/crypto/binance.png`} alt="" /> Binance (BNB)
                  </a>
              </li>

            </ul>
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
