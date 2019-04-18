import React from 'react';

import { makeStyles } from '@material-ui/styles';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';

import Logo from './Logo';
import Navigation from './Navigation';

const useStyles = makeStyles({
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
    height: '75%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  contact: {
    background: 'rgba(0, 0, 0, 0.5)',
    // height: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  }
});

const Contact = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.contactContainer}>
        <div className={classes.contact}>
        <Navigation/>
        </div>
      </div>
    </div>
  )
}


export default Contact;
