import React from 'react';

import { makeStyles } from '@material-ui/styles';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';

import Logo from './Logo';
import Navigation from './Navigation';

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
  contactContainer: {
    top: 150,
    height: '72%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '80%',  
      alignItems: 'flex-end',   
    },
  },
  contact: {
    background: 'rgba(0, 0, 0, 0.5)',
    height: 550,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      height: '90%',   
    },
  },
  contactInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    zIndex: 1,
    top: 150,
  },
  contactText: {
    color: 'white',
    fontFamily: 'Abel',
    textAlign: 'center',
    margin: 0,
    padding: 0,
    textShadow: '2px 2px #000000',
    lineHeight: 2,
    [theme.breakpoints.down('xs')]: {
      fontSize: 22 
    },
  },
  contactEmail: {
    textDecoration: 'none',
    color: '#4C94FF',
  },
}))

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.contactContainer}>
        <div className={classes.contact}>
        <Navigation className={classes.navigation}/>
          <div className={classes.contactInfo}>

            <h1 className={classes.contactText}>
              Say Hello,
              <br/>
              (519)-701-0249
              <br/>
              <a className={classes.contactEmail} href="mailto:me@vaughnpaulger.com">me@vaughnpaulger.com</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;
