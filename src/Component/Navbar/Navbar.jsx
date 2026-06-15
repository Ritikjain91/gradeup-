import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'GATE' },
    { to: '/services', label: 'Interview Preparation' },
    { 
      to: '/contact', 
      label: 'DBMS & SQL',
      sublabel: 'GATE CS & PSUs & ESE & Interviews',
      badge: 'Coming Soon'
    },
    { 
      to: '/contact', 
      label: 'Computer Networks',
      sublabel: 'GATE CS & PSUs & ESE & Interviews',
      badge: 'Coming Soon'
    },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar">
      {/* Brand Logo */}
      <div className="nav-brand">
        <Link to="/" onClick={closeMenu}>GradeUp</Link>
      </div>

      {/* Hamburger Button */}
      <button 
        className={`hamburger ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? 'nav-menu-open' : ''}`}>
        {navLinks.map((link, index) => (
          <li className="nav-item" key={index}>
            <Link 
              to={link.to} 
              className="nav-link"
              onClick={closeMenu}
            >
              <div className="nav-link-content">
                <span className="nav-link-label">{link.label}</span>
                {link.sublabel && (
                  <span className="nav-link-sublabel">{link.sublabel}</span>
                )}
              </div>
              {link.badge && (
                <span className="nav-badge">{link.badge}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* Overlay */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;