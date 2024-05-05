import React from 'react';
import './index.css'; // Import your CSS file for styling

const GalleryPage: React.FC = () => {
  const catImageUrl = 'https://placekitten.com/200/300'; // Hardcoded cat image URL

  return (
    <div className="projects-page">
      <h1>Gallery</h1>
      <p>A collection of photos taken by me, coming soon!</p>
      <img className='cat-image' src={catImageUrl} alt="Cute Cat" />
    </div>
  );
};

export default GalleryPage;
