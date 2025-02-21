import "./header.scss";
import React from "react";
import images from "../../assets";

function Header() {
  return (
    <header className="header-wrapper">
      <div className="header container">
        <img src={images.logo} className="logo" alt="Logo" />
        <div className="right-container">
          <div className="first-line">
            <img src={images.vector} className="vector" alt="Vector" />
            <h6 className="heading-nav">Shoping Cart</h6>
            {/* <p className="sub-heading">Sustainable Fashion</p> */}
            <a href="#" className="nav-button">
              Sign In
            </a>
            <a href="#" className="nav-button">
              Register
            </a>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sustainability">
                  Sustainability
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/socialResponsibility">
                  Responsibility
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fabric">
                  Fabric
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/fibers">
                  Fibers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
