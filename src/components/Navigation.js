import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className={`topnav ${showNavbar ? 'responsive' : ''}`} id="myTopnav">
      <div className="logo">
        <NavLink to="/codewoo-insider" className="logo-link">CodeWooInsider</NavLink>
      </div>
      <div className={`nav-links ${showNavbar ? 'show' : ''}`}>
        <NavLink to="/codewoo-insider" className="nav-link active">Home</NavLink>
        <NavLink to="/codewoo-insider/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/codewoo-insider/about" className="nav-link">About</NavLink>
        <NavLink to="/codewoo-insider/contact" className="nav-link">Contact</NavLink>
      </div>
      <button className="icon" onClick={handleShowNavbar}>&#9776;</button>
    </div>
  );
};

export default Navigation;
