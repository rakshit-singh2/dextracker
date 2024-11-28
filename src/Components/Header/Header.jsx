import React from 'react'

const Header = () => {
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
         <div className='dropdown'>
        <div className="d-flex p-lg-0 align-items-center justify-content-end">
          <div className="button1 mvs">
            <span style={{ fontWeight: 200, color: "#9b9ba0", fontSize: "14px" }}>24H Volume:</span>
            <strong style={{ color: "#fff" }}>$18.78B</strong>
          </div>
          <div className="button1 mvs">
            <span style={{ fontWeight: 200, color: "#9b9ba0", fontSize: "14px" }}>24H Txns:</span>
            <strong style={{ color: "#fff" }}>$24.78B</strong>
          </div>
        </div>
        
        </div>
      </nav>
      </div>
  )
}

export default Header