import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">Gate</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">interview Preparation</Link>
          
        </li>
         <li className="nav-item">
          <Link to="/contact" className="nav-link">SQL (GATE CS & PSUS EXAM &ESE(EC&EE) & Interview Preparation) <span className="nav-link-highlight">Coming Soon</span></Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;