import React from 'react';
import { NavLink } from 'react-router-dom';
import vaughnPaulgerLogo from './assets/vaughnPaulgerLogo.png';
import vaughnPaulgerResume from './assets/Vaughn-Paulger-Resume.pdf';
import './styles/landingNavigation.scss';

const LandingNavigation = () => {
  return (
    <div className='navContainer'>
      <div className='navBackground'></div>
      <div className='logoNavBox'>
        <NavLink
          className='navLink'
          to='/'
        >
          <h1>
            <img
              className='logo'
              src={vaughnPaulgerLogo}
              alt='vaughn Paulger'
            />
          </h1>
        </NavLink>
        <NavLink
          className='navLink'
          to='/'
        >
          <h2 className='navTitle'>Full Stack Developer</h2>
        </NavLink>
        <div className='navBox'>
          <div className='navList'>
            <a href={vaughnPaulgerResume} target='_blank' rel='noreferrer'>About</a>
            <NavLink to='/experience'>Experience</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNavigation;
