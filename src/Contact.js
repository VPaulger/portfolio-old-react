import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './styles/contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <Logo/>
      <div className='contactContainer'>
        <div className='contactContainerInfo'>
        <Navigation className='navigation'/>
          <div className='contactInfo'>
            <h1 className='contactText'>
              Say Hello,
              <br/>
              (519)-701-0249
              <br/>
              <a className='contactEmail' href="mailto:vaughn.paulger@gmail.com">vaughn.paulger@gmail.com</a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;
