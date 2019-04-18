import React from 'react';

import { makeStyles } from '@material-ui/styles';

import Slider from "react-slick";

import Logo from './Logo';
import Navigation from './Navigation';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';
import boomtown from './assets/boomtown.PNG';
import mozaikGlobal from './assets/mozaikGlobal.png';
import foostown from './assets/foostown.PNG';
import acuity from './assets/acuity.PNG';


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
  experienceContainer: {
    height: '75%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  experience: {
    background: 'rgba(0, 0, 0, 0.5)',
    height: 500,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  experienceSlider: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  }
});

const Experience = () => {
  const classes = useStyles();

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   // speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  console.log(boomtown); // /logo.84287d09.png

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.experienceContainer}>
        <div className={classes.experience}>
          <Navigation/>
          <div className={classes.experienceSlider}>
          {/* <Slider {...settings}> */}
          
            <div class="experienceBlocks">
              <a href="http://localhost:3003/" target="_blank">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={boomtown}/>
                </div>
              </a>
              <h3>Boomtown</h3>
              <p>React Web App</p>
            </div>
            <div class="experienceBlocks">
              <a href="https://drive.google.com/open?id=1Ar0VAfGJ_F0aVUHhg_Tvfg0DcCJ4KOjZ" target="_blank">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={mozaikGlobal}/>
                </div>
              </a>
              <h3>Mozaik Global</h3>
              <p>React Native Ios App</p>
            </div>
            <div class="experienceBlocks">
              <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={foostown}/>
                </div>
              </a>
              <h3>Foostown</h3>
              <p>React Web App</p>
            </div>
            <div class="experienceBlocks">
              <a href="vaughn-paulger-project-02/dist/index.html" target="_blank">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={acuity}/>
                </div>
              </a>
              <h3>Acuity Partners</h3>
              <p>Custom WordPress Theme</p>
            </div>
          {/* </Slider> */}
          </div>
        </div>
      </div>
    </div>
  )
}


export default Experience;
