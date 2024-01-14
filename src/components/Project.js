import React from 'react';

const Project = ({ title, languages, dates, description }) => (
  <div className="card">
    <span className="project-title">{title}</span> <br />
    <span className="project-languages">{languages} | </span>
    <span className="project-dates">{dates}</span>
    <p className="project-description">{description}</p>
    <button onClick={() => alert(`View ${title} project`)}>VIEW PROJECT</button>
  </div>
);

export default Project;
