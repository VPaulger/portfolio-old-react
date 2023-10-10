import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import vaughnPaulgerResume from './assets/Vaughn-Paulger-Resume.pdf';
import './styles/about.scss';

const About = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className='about'>
      <Logo/>
      <div className='aboutContainer'>
        <div className='aboutContainerContent'>
          <Navigation className='navigation'/> 
          <div className='aboutContent'>
            <iframe style={{ width: '100%', height: '100%', alignSelf: 'center' }} src={vaughnPaulgerResume}></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About