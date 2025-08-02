import React, { useEffect, useRef } from 'react';
import './Hero.css';
import Typed from 'typed.js';

function Hero() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'MERN Stack Developer',
        'AI Automation Engineer',
        'DevOps Enthusiast',
        'Freelancer for Hire'
      ],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1>Hi, I'm <span className="highlight">Anas Muntazir</span></h1>
        <h2><span ref={typedElement}></span><span className="cursor">|</span></h2>
        <p>I build full-stack apps, automate workflows, and deliver intelligent digital solutions.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
