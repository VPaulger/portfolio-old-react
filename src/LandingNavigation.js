import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles'

//react router
import { NavLink } from 'react-router-dom'

import vaughnPaulgerLogo from './assets/vaughnPaulgerLogo.png' // Tell Webpack this JS file uses this image

const useStyles = makeStyles(theme => ({
  root: {
  },
  navContainer: {
    height: 275,
    width: '100%',
    position: 'relative',
    zIndex: '1',
    fontFamily: 'Abel',
    textTransform: 'uppercase',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      height: 180,
    },
  },
  navBackground: {
    background: '#000000',
    height: '100%',
    width: '100%',
    opacity: '0.5',
    zIndex: '-1',
    position: 'absolute',
  },
  logo: {
    marginTop: 35,
    height: 125,
    width: 'auto',
    [theme.breakpoints.down('xs')]: {
      height: 65,
      marginTop: 25,
    },
  },
  logoNavBox: {
    zIndex: '2',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  navBack: {
    background: '#000000',
    height: '30px',
    width: '100%',
    opacity: '0.5',
    position: 'absolute',
    zIndex: '2',
  },
  navList: {
    position: 'absolute',
    zIndex: '2',
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      // width: 331.69,
      width: 300,     
    },
  },
  navLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: 18,
    // width: '100%',
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14, 
    },
  },
  navHover: {
    textDecoration: 'none',
    color: '#FFFFFF',
    fontSize: 18,
    textShadow: '0 0 4px #FFFFFF',
    transition: 'all 0.05s linear',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14, 
    },
  },
  navBox: {
    width: '100%',
    height: '35px',
    marginBottom: 35,
    // position: 'relative',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 25,
      height: '30px',
    },
  },
  navTitle: { 
    margin: 0, 
    marginTop: '-35px', 
    color: '#FFFFFF', 
    fontSize: '26px', 
    fontFamily: 'Abel',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      marginTop: '-20px', 
    },
  },
}))

const LandingNavigation = () => {
  const classes = useStyles()

  //hover states
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);

  
  const [hovered3, setHovered3] = useState(false);
  const toggleHover3 = () => setHovered3(!hovered3);

  return (
    <div className={classes.navContainer}>
      <div className={classes.navBackground}></div>
      <div className={classes.logoNavBox}>
        <NavLink className={classes.navLink} to="/">
          <h1 style={{margin: 0}}><img className={classes.logo} src={vaughnPaulgerLogo} alt="vaughn Paulger" /></h1>
        </NavLink>
        <NavLink className={classes.navLink} to="/">
          <h2 className={classes.navTitle}>Full Stack Developer</h2>
        </NavLink>
        
        <div className={classes.navBox}>
          <div className={classes.navList}>
          <NavLink
            className={hovered ? classes.navHover : classes.navLink}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover} 
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={hovered2 ? classes.navHover : classes.navLink}
            onMouseEnter={toggleHover2}
            onMouseLeave={toggleHover2} 
            to="/experience"
          >
            Experience
          </NavLink>          
          <NavLink
            className={hovered3 ? classes.navHover : classes.navLink}
            onMouseEnter={toggleHover3}
            onMouseLeave={toggleHover3} 
            to="/contact"
          >
            Contact
          </NavLink>
          </div>
        </div>
      </div>
      
    </div>
  )
}


export default LandingNavigation