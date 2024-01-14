// ProjectsContainer.js

import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ThemeContext from './ThemeContext';
import { applyTheme } from './ApplyTheme';
import './styles.css'; // Import the styles.css file

const ProjectsContainer = () => {
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const projects = [
    // Your project data here...
  ];

  const openProjectWindow = (projectUrl) => {
    window.open(projectUrl, '_blank');
  };

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="container projects-container">
      <h3 className="section-header">Projects</h3>
      {projects.map((project, index) => (
        <div key={project.title} className="project-card card" style={{ animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s` }}>
          <Project {...project} />
          <button onClick={() => openProjectWindow(project.url)}>View Project</button>
        </div>
      ))}
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </div>
  );
};

export default ProjectsContainer;
