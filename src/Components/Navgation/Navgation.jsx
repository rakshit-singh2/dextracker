import { Link } from "react-router-dom";
import { chains,chainsLogo, clients } from "../../constants/constants";
import React, { useEffect } from "react";
import '../../js/custom-jquery.js';
const Navigation = ({ chain }) => {

  useEffect(() => {
    const el = document.getElementById("wrapper");
    const toggleButton = document.getElementById("menu-toggle");

    if (el && toggleButton) {
      toggleButton.onclick = function () {
        el.classList.toggle("toggled");
      };
    }
  }, []);

  return (
    <div id="sidebar-wrapper" className="sidebar-wrapper">

      <nav className="menutoggle navbar navbar-expand-lg py-lg-3 px-2 px-lg-4 d-flex fixed-top justify-content-between">
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center d-lg-none">
            <span className="material-symbols-outlined menu-toggle" id="menu-toggle">
              menu
            </span>
          </div>
        </div>
      </nav>


      <div className="sidebar-heading">
        <Link to="/">
          <img id="logo" src="/img/logo.png" alt="Logo" />
        </Link>

      </div>
      <nav className="sidebar mb-4">
        <ul className="nav flex-column" id="nav_accordion">
          <li className="nav-item">
            <Link className="nav-link d-flex gap-2 align-items-center" to="/">
              <i className="fa fa-star"></i>
              <span className="fw-semibold">Home</span>
            </Link>
          </li>
          
          {chains.map((value, key) => (
            <li className="nav-item" key={key}>
              <Link className={`nav-link d-flex gap-2 align-items-center ${chain === value ? 'active-link' : ''}`} to={`chain/${value}`}>
                <img src={chainsLogo[key]} alt="Ethereum logo" style={{ width: "19px", height: "19px", borderRadius: "50%" }} />
                <span className="fw-semibold">{value}</span>
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
