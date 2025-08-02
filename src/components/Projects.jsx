import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Spacify - Rental Marketplace',
      image: '/images/spacify.png',
      description: 'A MERN stack platform for listing and renting properties with AI-powered search.',
      tech: ['MERN', 'AI', 'Groq API'],
      github: '*',
      demo: '*',
    },
    {
      title: 'GitHub Contribution Tracker',
      image: '/images/contribution.png',
      description: 'Visualizes and tracks GitHub contributions using GitHub API and charts.',
      tech: ['React', 'GitHub API', 'Chart.js'],
      github: '*',
      demo: '*',
    },
    {
      title: 'Car Pooling System',
      image: '/images/carpool.png',
      description: 'A web app for users to find and share rides efficiently using the MERN stack.',
      tech: ['MongoDB', 'Express', 'React', 'Node'],
      github: '*',
      demo: '*',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 data-aos="fade-left">🚀 Projects</h2>
      <p data-aos="fade-up">Some of the awesome things I’ve built recently</p>
      <div className="project-grid" data-aos="zoom-in-up">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="overlay">
                <div className="overlay-buttons">
                  <a href={project.demo} target="_blank" rel="noreferrer">💻 Live Demo</a>
                  <a href={project.github} target="_blank" rel="noreferrer">🔗 GitHub</a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((tag, i) => (
                  <span key={i} className="tech-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
