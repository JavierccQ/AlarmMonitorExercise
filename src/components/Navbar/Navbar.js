import React from "react";
import Logo from "../assets/images/maintenance.svg"
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
      <img className="logo" src={Logo} alt="Logo"/> 
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          
        </ul>
        <ul className="navbar-nav ">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fa fa-bell">
                <span className="badge badge-danger">11</span>
              </i>              
            </a>
          </li>         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
