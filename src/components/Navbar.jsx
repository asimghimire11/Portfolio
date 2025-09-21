import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">ASIM GHIMIRE</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">About me</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#portfolio" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact me</a>
        </div>
        <a href="#contact" className="hire-button">Hire Me</a>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;