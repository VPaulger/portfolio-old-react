import React from 'react';
import { Link } from 'react-router-dom';
import vaughnPaulgerLogo from './assets/vaughnPaulgerLogo.png'; // Tell Webpack this JS file uses this image
import './styles/logo.scss';

const Logo = () => {
  return (
    <div className='logoContainer'>
      <div className='logoBack'></div>
      <div className='logoNavBox'>
        <Link
          className='linkStyle'
          to='/'
        >
          <h1>
            <img
              className='logo'
              src={vaughnPaulgerLogo}
              alt='vaughn Paulger'
            />
          </h1>
        </Link>
        <Link
          className='linkStyle'
          to='/'
        >
          <h2 className='logoTitle'>Full Stack Developer</h2>
        </Link>
      </div>
    </div>
  );
};

export default Logo;
