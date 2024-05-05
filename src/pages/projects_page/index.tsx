import React from 'react';
import './index.css'; // Import your CSS file for styling

const ProjectsPage: React.FC = () => {
  const catImageUrl = 'https://placekitten.com/200/300'; // Hardcoded cat image URL

  return (
    <div className="projects-page">
      <h1>Projects</h1>
      <p>An assortment of projects developed by me, coming soon!</p>
      <img className='cat-image' src={catImageUrl} alt="Cute Cat" />
    </div>
  );
};

export default ProjectsPage;
