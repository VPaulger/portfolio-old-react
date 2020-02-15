import React, { useState } from 'react';

import { makeStyles } from '@material-ui/styles';

import Slider from "react-slick";

import Logo from './Logo';
import Navigation from './Navigation';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';
import boomtown from './assets/boomtown.PNG';
import mozaikGlobal from './assets/mozaikGlobal.png';
import foostown from './assets/foostown.PNG';
import acuity from './assets/acuity.PNG';
import plannedParenthood from './assets/plannedParenthood.PNG';
import leaNelson from './assets/leaNelson.PNG';
import r10 from './assets/r10.PNG';
import denpal from './assets/denpal.PNG';
import ACMPTorontoDesktop from './assets/ACMPTorontoDesktop.PNG';



const useStyles = makeStyles( theme => ({
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
    height: '72%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '80%',  
      alignItems: 'flex-end',   
    },
  },
  experienceSlider: {
    width: '95%', 
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '92%',     
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',     
    },
    [theme.breakpoints.down('xs')]: {
      width: '85%',     
    },
  },
  experience: {
    background: 'rgba(0, 0, 0, 0.5)',
    height: 550,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1,
    [theme.breakpoints.down('xs')]: {
      height: '90%',   
    },
  },
  experienceBlockBox: {
    display: 'flex !important',
    justifyContent: 'center',
  },
  experienceLink: {
    textDecoration: 'none',
    color: '#FFFFFF',
    // paddingTop: 15,
  },
  experienceLinkHover: {
    textDecoration: 'underline',
    color: '#FFFFFF',
  },
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Experience = () => {
  const classes = useStyles();

  //hover states
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const [hovered2, setHovered2] = useState(false);
  const toggleHover2 = () => setHovered2(!hovered2);
  const [hovered3, setHovered3] = useState(false);
  const toggleHover3 = () => setHovered3(!hovered3);
  const [hovered4, setHovered4] = useState(false);
  const toggleHover4 = () => setHovered4(!hovered4);
  const [hovered5, setHovered5] = useState(false);
  const toggleHover5 = () => setHovered5(!hovered5);
  const [hovered6, setHovered6] = useState(false);
  const toggleHover6 = () => setHovered6(!hovered6);
  const [hovered7, setHovered7] = useState(false);
  const toggleHover7 = () => setHovered7(!hovered7);

  var settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: { slidesToShow: 1, slidesToScroll: 1 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 }
      },
      {
        breakpoint: 1440,
        settings: { slidesToShow: 3, slidesToScroll: 1 }
      }
    ]
  };

  console.log(boomtown); // /logo.84287d09.png

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.experienceContainer}>
        <div className={classes.experience}>
          <Navigation/>
          {/* <div className={classes.experienceSlider}> */}
          <div className={classes.experienceSlider}>
            <Slider {...settings}>
            <div className={classes.experienceBlockBox}>
            <div class="experienceBlocks"> 
              <div class="image1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={denpal}/>
              </div>
              <a className={classes.experienceLink} href="https://drive.google.com/open?id=1H3jj_lJjKjkrFyHkCYGvLcfgKq_olUod" target="_blank">
                <h3 
                  className={hovered ? classes.experienceLinkHover : classes.experienceLink}
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}   
                >Denpal Foods</h3>
                <p>React Web App</p>
              </a>
            </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={mozaikGlobal}/>
                </div>
                <a className={classes.experienceLink} href="https://drive.google.com/open?id=1Ar0VAfGJ_F0aVUHhg_Tvfg0DcCJ4KOjZ" target="_blank">
                  <h3 
                    className={hovered2 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover2}
                    onMouseLeave={toggleHover2}   
                  >Mozaik Global</h3>
                  <p>React Native iOS App</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={ACMPTorontoDesktop}/>
                </div>
                <a className={classes.experienceLink} href="http://acmptoronto.org" target="_blank">
                  <h3
                    className={hovered3 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover3}
                    onMouseLeave={toggleHover3} 
                  >ACMP Toronto</h3>
                  <p>Custom WordPress Theme</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={plannedParenthood}/>
                </div>
                <a className={classes.experienceLink} href="http://www.ppt.on.ca/" target="_blank">
                  <h3
                    className={hovered6 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover6}
                    onMouseLeave={toggleHover6} 
                  >Planned Parenthood</h3>
                  <p>Custom WordPress Theme</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={foostown}/>
                </div>
                <a className={classes.experienceLink} href="http://ec2-35-183-120-31.ca-central-1.compute.amazonaws.com/" target="_blank">
                  <h3
                    className={hovered4 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover4}
                    onMouseLeave={toggleHover4} 
                  >Foostown</h3>
                  <p>React Web App</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={acuity}/>
                </div>
                <a className={classes.experienceLink} href="https://drive.google.com/open?id=1JJfuhKFJFgnQ6qBJKl3P9yOng7q813JL" target="_blank">
                  <h3
                    className={hovered3 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover3}
                    onMouseLeave={toggleHover3} 
                  >Acuity Partners</h3>
                  <p>Custom WordPress Theme</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={r10}/>
                </div>
                <a className={classes.experienceLink} href="https://drive.google.com/open?id=1FRgPBpg6CleTNp3-JBnjV5tqunwS1GUz" target="_blank">
                  <h3
                    className={hovered5 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover5}
                    onMouseLeave={toggleHover5} 
                  >R10</h3>
                  <p>React Native iOS App</p>
                </a>
              </div>
            </div>
            <div className={classes.experienceBlockBox}>
              <div class="experienceBlocks">
                <div class="image1">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <img src={leaNelson}/>
                </div>
                <a className={classes.experienceLink} href="http://leanelson.com/" target="_blank">
                  <h3
                    className={hovered7 ? classes.experienceLinkHover : classes.experienceLink}
                    onMouseEnter={toggleHover7}
                    onMouseLeave={toggleHover7} 
                  >Lea Nelson</h3>
                  <p>Wordpress Website</p>
                </a>
              </div>
            </div>
           </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Experience;
