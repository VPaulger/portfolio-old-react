import React from 'react';

import { makeStyles } from '@material-ui/styles';

import backgroundImage from './assets/vaughnPaulgerBackground.jpg';

import Logo from './Logo';
import Navigation from './Navigation';

import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

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
    height: 500,
    width: '100%',
    display: 'flex',
    // justifyContent: 'center',
    flexDirection: 'column',
  },
  navigation: {
    alignSelf: 'flex-end',
  },
  // experienceSlider: {
  //   display: 'flex',
  //   // justifyContent: 'center',
  //   alignItems: 'center',
  //   width: '100%',
  // },
});

const About = () => {
  const classes = useStyles();

  const IMAGES =
  [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  }]

  return (
    <div className={classes.root}>
      <Logo/>
      <div className={classes.contactContainer}>
        <div className={classes.contact}>
          <Navigation className={classes.navigation}/>
          {/* <div className={classes.experienceSlider}> */}

          <Gallery images={IMAGES}/>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default About