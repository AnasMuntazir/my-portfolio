import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'HTML', icon: '🟧' },
    { name: 'CSS', icon: '🔵' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express.js', icon: '🚂' },
    { name: 'Git', icon: '🔧' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Python', icon: '🐍' },
    { name: 'OpenAI API', icon: '🧠' },
    { name: 'AWS (Basics)', icon: '☁️' },
  ];

  return (
    <section className="skills" id="skills">
      <h2 data-aos="fade-up">⚡ My Tech Stack</h2>
      <p data-aos="fade-up" data-aos-delay="100">
        Technologies I use to build, deploy, and automate
      </p>
      <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
