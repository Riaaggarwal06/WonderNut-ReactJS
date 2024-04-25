import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid wholenavbar">
        <Link className="navbar-brand" to="/">
          <img src="/logo.jpeg" alt="WonderNut Logo"  className='logo'/> 
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav">
            <li className="nav-item" >
              <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={{color:'white'}}>About Us</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" style={{color:'white'}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Order Now
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/menu">Menu</Link></li>
                <li><Link className="dropdown-item" to="/reservation">Reservation</Link></li> 
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/feedback" style={{color:'white'}}>Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
