import React from 'react';
import './Navbar.css';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`floating-navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* your nav links */}
      <ul className="nav-links">
    <li><a href="#hero">Home</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>

  <div className="social-icons">
  <a href="https://github.com/AnasMuntazir" target="_blank" rel="noopener noreferrer">
    <i><FaGithub /></i>
  </a>
  <a href="www.linkedin.com/in/anas-muntazir" target="_blank" rel="noopener noreferrer">
    <i><FaLinkedin /></i>
  </a>
</div>
    </nav>
  );
}


// function Navbar() {
//   return (
//     <nav className="floating-navbar">
//   <ul className="nav-links">
//     <li><a href="#home">Home</a></li>
//     <li><a href="#skills">Skills</a></li>
//     <li><a href="#projects">Projects</a></li>
//     <li><a href="#about">About</a></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
// </nav>
//   );
// }

export default Navbar;
