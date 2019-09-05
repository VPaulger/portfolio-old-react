import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';

import Logo from './Logo';
import Navigation from './Navigation';

import vaughnPaulgerResume2019 from './assets/Vaughn-Paulger-Resume-2019.pdf';
import homerSimpson from './assets/homer-simpson.png';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
  },
  aboutContainer: {
    height: '72%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '80%',  
      alignItems: 'flex-end',   
    },
  },
  about: {
    background: 'rgba(0, 0, 0, 0.5)',
    height: 550,
    width: '100%',
    display: 'flex',
    // justifyContent: 'space-between',
    flexDirection: 'column',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      height: '90%',   
    },
  },
  navigation: {
    // alignSelf: 'flex-end',
  },
  homer: {
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: 300,
    },
  },
  aboutContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  aboutResume: {
    alignSelf: 'center',
    fontFamily: 'abel',
    textDecoration: 'none',
    color: '#FFFFFF',
    marginTop: 15,
    fontSize: 36,
    textShadow: '2px 2px #000000',
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',   
      border: '1px solid #0066ff',
      borderRadius: 8,
      marginTop: 65,
    },
  },
  aboutResumeHover: {
    alignSelf: 'center',
    fontFamily: 'abel',
    textDecoration: 'underline',
    color: '#FFFFFF',
    marginTop: 15,
    textShadow: '2px 2px #000000',
    fontSize: 36,
    [theme.breakpoints.down('xs')]: {
      fontSize: '22px',
      marginTop: 65,   
    },
  },
  resumeText: {
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: 5,
      paddingLeft: 15,
      paddingRight: 15,
    },
  },
}))

const About = () => {
  const classes = useStyles();

  //hover states
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.aboutContainer}>
        <div className={classes.about}>
          <Navigation className={classes.navigation}/> 
          <div className={classes.aboutContent}>
            <a 
              className={hovered ? classes.aboutResumeHover : classes.aboutResume}
              onMouseEnter={toggleHover}
              onMouseLeave={toggleHover} 
              target='_blank' 
              href={vaughnPaulgerResume2019}
            >
              <p className={classes.resumeText}>View My Resume</p>
            </a>   
            {/* <iframe style={{ width: 500, height: 400, alignSelf: 'center' }} src={vaughnPaulgerResume2019}></iframe>     */}
            <img className={classes.homer} src={homerSimpson}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About