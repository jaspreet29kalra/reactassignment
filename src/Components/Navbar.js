import React from "react"
import { NavLink } from "react-router-dom";
import logo from "../images/download.jpg"

function Navbar() {
  return (
<>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src={logo} alt="image" style={{height:"40px", width:"70px"}}></img></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active text-light" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      
    
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle text-light " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Login User
          </NavLink>
          <ul className="dropdown-menu bg-dark">
            <li><NavLink className="dropdown-item text-light" to="/studentlogin">Student</NavLink></li>
            <li><NavLink className="dropdown-item text-light" to="/stafflogin">Staff</NavLink></li>
           
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>


</>
  );
}

export default Navbar;
