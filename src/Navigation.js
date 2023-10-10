import React from 'react';
import { NavLink } from 'react-router-dom';
import vaughnPaulgerResume from './assets/Vaughn-Paulger-Resume.pdf';
import './styles/navigation.scss';

const Navigation = () => {
  return (
    <div className='navContainer'>
      <div className='navBox'>
        <div className='navList'>
          <a href={vaughnPaulgerResume} target='_blank' rel='noreferrer'>About</a>
          <NavLink
            to='/experience'
            activeClassName='activeNavLink'
          >
            Experience
          </NavLink>
          <NavLink
            to='/contact'
            activeClassName='activeNavLink'
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
