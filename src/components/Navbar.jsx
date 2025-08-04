import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector('.floating-navbar');
    const handleScroll = () => {
      if (window.scrollY > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="floating-navbar">
        <div className="left-icons">
          <a href="https://github.com/AnasMuntazir" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/anas-muntazir-74b310370/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        <ul className="nav-links-desktop">
          <li><a href="#hero">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      <ul className={`nav-links-mobile ${menuOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={closeMenu}>Home</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </>
  );
}

export default Navbar;
