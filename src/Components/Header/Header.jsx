import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { clients } from '../../constants/constants';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSwapChange = (path) => {
    navigate(path);
  };

  if (Object.keys(clients).includes(location.pathname.split('-')[1])) {
    return (
      <div className="page-content-wrapper">
        <nav className="navbar navbar-expand-lg py-lg-3 px-2 px-lg-4 d-flex fixed-top justify-content-between">
         
          <div className="col-md-12 topmenu">
            <div className="justify-content-end">
              <div className="row">
                <div className="col-md-10">
                  <ul className="allchain">
                    <li className="firstchaindiv">All Swap</li>
                    {Object.keys(clients[location.pathname.split('-')[1]].graph).map((value, index) => (

                      <li key={index}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSwapChange(`/${value}-${location.pathname.split('-')[1]}`);
                          }}
                        >
                          <img
                            src={clients[location.pathname.split('-')[1]].graph[value].icon}
                            alt={value}
                            style={{ width: "22px", height: "22px", borderRadius: "50%" }}
                          />
                          {value.charAt(0).toUpperCase() + (value.slice(1)[value.length - 3] == 'v' ? value.slice(1, value.length - 2) + 'V' + value.slice(value.length - 1) : value.slice(1))}
                        </a>
                      </li>
                    ))}
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
        </nav >
      </div >
    );
  } else {
    return;
  }
};

export default Header;
