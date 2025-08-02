import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer" >
      <div className="footer-top" data-aos="fade-up">
        <h3>Anas Muntazir</h3>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-icons">
          <a href="https://github.com/anasmuntazir" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/anasmuntazir" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:anasmuntazir@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <p className="footer-bottom">© {new Date().getFullYear()} Anas Muntazir. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
