import React from 'react'

import { makeStyles } from '@material-ui/styles'

//react router
import { Link } from 'react-router-dom'

import vaughnPaulgerLogo from './assets/vaughnPaulgerLogo.png' // Tell Webpack this JS file uses this image
import { relative } from 'path'

const useStyles = makeStyles({
  root: {
  },
  navContainer: {
    // height: 150,
    width: '100%',
    position: 'relative',
    zIndex: '1',
    fontFamily: 'Abel',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  navBackground: {
    // background: '#000000',
    height: '100%',
    width: '100%',
    // opacity: '0.5',
    zIndex: '-1',
    position: 'absolute',
  },
  logo: {
    paddingTop: 15,
    height: 125,
    width: 'auto',
  },
  logoNavBox: {
    zIndex: '2',
    // paddingTop: 20,
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  navBack: {
    background: '#000000',
    height: '20px',
    width: '100%',
    opacity: '0.5',
    position: 'relative',
    zIndex: '2',
    marginBottom: 10,
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
    display: 'block',
    margin: '0 auto',
    // justifyContent: 'center',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Navigation = () => {
  const classes = useStyles()

  return (
    <div className={classes.navContainer}>
      <div className={classes.navBack}></div>
      <div className={classes.navBackground}></div>
      <div className={classes.logoNavBox}>
        <Link className={classes.linkStyle} to="/">
          <h1 style={{margin: 0}}><img className={classes.logo} src={vaughnPaulgerLogo} alt="vaughn Paulger" /></h1>
        </Link>
        <Link className={classes.linkStyle} to="/">
          <h2 style={{margin: 0, marginTop: '-15px', color: '#FFFFFF', fontSize: '26px', fontFamily: 'Abel'}}>Full-Stack Developer</h2>
        </Link>
    </div>
    
  </div>
  )
}


export default Navigation
