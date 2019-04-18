import React from 'react'

import { makeStyles } from '@material-ui/styles'

import backgroundImage from './assets/vaughnPaulgerBackground.jpg'

import LandingNavigation from './LandingNavigation'


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})


const LandingPage = () => {
  const classes = useStyles()

  const sayHi = () => (
    <h1>Hey</h1>
  )
  
  setTimeout(sayHi, 1000)

  return (
    <div className={classes.root}>
      <LandingNavigation/>
    </div>
  )
}


export default LandingPage
