import React from 'react'

const Footer = () => {
  return (
    <div className="row py-2 g-3 g-lg-4 top-border footer">
          <div className="col-lg-8">
            <span className="Copyright text-center d-block w-100">
            <span className='copyrighttext'>Copyright © 2024. All Rights Reserved By </span>
            <a href="#"
            className="primary">Domain Name</a>
            </span>

          </div>
          <div className="col-lg-4">
            <ul
              className="footermenu d-flex gap-2 gap-xl-4 p-0 align-items-center flex-wrap justify-content-center justify-content-lg-end">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
  )
}

export default Footer
