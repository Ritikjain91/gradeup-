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
          <Link to="/about" className="nav-link">GATE</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link">Interview Preparation</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            DBMS & SQL (GATE CS & PSUs Exam & ESE (EC & EE) & Interview Preparation  & Other Related Govt Exams & Interview Preparation) 
            <span className="nav-link-highlight">Coming Soon</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Computer Networks (GATE CS & PSUs Exam & ESE (EC & EE) & Other Related Govt Exams & Interview Preparation) 
            <span className="nav-link-highlight">Coming Soon</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;