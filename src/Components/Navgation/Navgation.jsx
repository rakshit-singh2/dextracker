import React from "react";
import { Link } from "react-router-dom";
import { clients } from "../../constants/constants";

const Navigation = ({ chain }) => {

  return (
    <div id="sidebar-wrapper" className="sidebar-wrapper">
      <div className="sidebar-heading">
        <Link to="/">
          <img id="logo" src="/img/logo.png" alt="Logo" />
        </Link>

      </div>
      <nav className="sidebar mb-4">
        <ul className="nav flex-column" id="nav_accordion">
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/watchlist">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Watchlist</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/alerts">
              <i className="fa fa-bell"></i>
              <span className="fw-semibold">Alerts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/multicharts">
              <i className="fa fa-th-large"></i>
              <span className="fw-semibold">Multicharts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/newpairs">
              <i className="fa fa-envira"></i>
              <span className="fw-semibold">New Pairs</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/gainerslosers">
              <i className="fa fa-exchange"></i>
              <span className="fw-semibold">Gainers & Losers</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/portfolio">
              <i className="fa fa-suitcase"></i>
              <span className="fw-semibold">Portfolio</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/services/api">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Watchlist</span>
            </Link>
          </li>
          {Object.keys(clients).map((key, index) => (
            <li className="nav-item" key={index}>
              <Link className={`nav-link d-flex gap-2 align-items-center ${chain === key ? 'active-link' : ''}`} to={`/${Object.keys(clients[key].graph)[0]}-${key}`}>
                <img src={clients[key]?.icon} alt="Ethereum logo" style={{ width: "22px", height: "22px", borderRadius: "50%" }} />
                <span className="fw-semibold">{key}</span>
              </Link>
            </li>
          ))}

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
