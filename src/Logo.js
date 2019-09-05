import React from 'react'

import { makeStyles } from '@material-ui/styles'

//react router
import { Link } from 'react-router-dom'

import vaughnPaulgerLogo from './assets/vaughnPaulgerLogo.png' // Tell Webpack this JS file uses this image

const useStyles = makeStyles(theme => ({
  navContainer: {
    width: '100%',
    height: '25%',
    position: 'relative',
    zIndex: '1',
    fontFamily: 'Abel',
    textTransform: 'uppercase',
    letterSpacing: 3,
    [theme.breakpoints.down('xs')]: {
      height: '20%',
    },
  },
  // navBackground: {
  //   height: '100%',
  //   width: '100%',
  //   zIndex: '-1',
  //   position: 'absolute',
  // },
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
    // height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  navBack: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '25px',
    width: '100%',
    position: 'relative',
    zIndex: '2',
    [theme.breakpoints.down('xs')]: {
      height: '20px',
    },
  },
  navList: {
    position: 'absolute',
    zIndex: '2',
    width: 400,
    display: 'flex',
    justifyContent: 'space-between',
    textDecoration: 'none',
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  navBox: {
    width: '100%',
    height: '25px',
    paddingBottom: 20,
    position: 'relative',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navTitle: {
    margin: 0, 
    marginTop: '-15px', 
    color: '#FFFFFF', 
    fontSize: '26px',
    fontFamily: 'Abel',
    [theme.breakpoints.down('xs')]: {
      fontSize: '18px',
      marginTop: '-10px', 
    },
  }
}))

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.navContainer}>
      <div className={classes.navBack}></div>
      {/* <div className={classes.navBackground}></div> */}
      <div className={classes.logoNavBox}>
        <Link className={classes.linkStyle} to="/">
          <h1 style={{margin: 0}}><img className={classes.logo} src={vaughnPaulgerLogo} alt="vaughn Paulger" /></h1>
        </Link>
        <Link className={classes.linkStyle} to="/">
          <h2 className={classes.navTitle}>Full Stack Developer</h2>
        </Link>
    </div>
    
  </div>
  )
}


export default Navigation
