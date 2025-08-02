import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <h2 data-aos="fade-down">👨‍💻 About Me</h2>
      <div className="about-container">
        <div className="about-text" data-aos="fade-right">
          <p>
            Hey, I’m <strong>Anas Muntazir</strong> — a passionate full stack developer who loves building smart,
            scalable, and beautiful digital experiences.
          </p>
          <p>
            I thrive on solving real-world problems through code. Whether it’s an AI-powered rental marketplace or
            a DevOps automation agent, I bring creativity and logic together to deliver value.
          </p>
          <p>
            I specialize in the <strong>MERN stack</strong>, with growing expertise in <strong>AI APIs</strong>,
            <strong> cloud integrations</strong>, and <strong>DevOps practices</strong>. I believe software should be
            functional, intuitive, and a joy to use.
          </p>
          <a href="/files/anas_resume.pdf" download className="resume-button">
            📄 Download Resume
          </a>
        </div>

        <div className="about-image" data-aos="fade-left">
          <div className="profile-ring">
            <img src="/images/anas-profile2.png" alt="Anas Muntazir" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
