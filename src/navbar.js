import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <span className="logo-icon">🔒</span>
          <span className="logo-text">Wasl System</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a 
            href="https://github.com/ali1636/wasl-system" 
            className="nav-link github-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="mobile-link" onClick={toggleMenu}>Home</a>
          <a href="#features" className="mobile-link" onClick={toggleMenu}>Features</a>
          <a href="#about" className="mobile-link" onClick={toggleMenu}>About</a>
          <a href="#contact" className="mobile-link" onClick={toggleMenu}>Contact</a>
          <a 
            href="https://github.com/ali1636/wasl-system" 
            className="mobile-link github-mobile"
            onClick={toggleMenu}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;