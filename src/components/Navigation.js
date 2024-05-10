import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navigation.css';

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  // This function toggles the state of isActive when the button is clicked
  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="brand-title">Codewooinsider</div>
      {/* When this button is clicked, toggleMenu will be called */}
      <button className="toggle-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {/* The className will include 'active' when isActive is true */}
      <div className={`navbar-links ${isActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
