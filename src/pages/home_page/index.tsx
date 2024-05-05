import React from 'react';
import './index.css';
import profPic from '../../assets/prof-pic.png';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';

const HomePage = () => {
  // Define font styles object
  const fontStyles = {
    color: '#52D3F5',
    fontWeight: '450'
  };

  return (
    <>
      <div className="homepage">
        <div className="profile">
          <div className="profile-left">
            <h1 className="profile-title">
              <span style={{ fontWeight: 'bold' }}>William</span> Huynh
            </h1>
            <img src={profPic} className="profile-image-small" alt="prof-pic" />
            <p>Hi! I'm Will :)</p>
            <p>I enjoy a lot of things! Currently I am exploring my interests around tech, particularly the interplay between software engineering and education. </p>
            <p>Over the years, I've been fortunate enough to work with some amazing people and groups, including the Data Trust & Safety Team at <span style={fontStyles}>TikTok Sydney</span>, the Education Portfolio of the Computer Science and Engineering Society, and the teaching team at the <span style={fontStyles}>UNSW School of Computer Science and Engineering.</span></p>
            <p>Currently, I am a software engineer at TikTok, and I also continue to casually teach for the School of Computer Science and Engineering at UNSW.</p>
            <p>I also enjoy tinkering around with old consoles, and spending way too much time playing story-oriented video games.</p>
            <p>But anyways, welcome to my corner of the internet!</p>
          </div>
          <div className="profile-right">
            <img src={profPic} className="profile-image-large" alt="prof-pic-large" />
          </div>
        </div>

        <div className="profile-icons">
          <a href="https://github.com/WilliamHuynh5" target="_blank" rel="noreferrer">
            <img className="icon-git" src={githubLogo} alt="icon-git" />
          </a>
          <a href="https://www.linkedin.com/in/williamhuynh5/" target="_blank" rel="noreferrer">
            <img className="icon-linked" src={linkedinLogo} alt="icon-linkedin" />
          </a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
