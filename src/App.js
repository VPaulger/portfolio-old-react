import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Experience from './Experience';
import Contact from './Contact';
import Clouds from './Clouds';

const App = () => (
  <Router>
    <>
      <Clouds />
      <Route
        path='/'
        exact
        component={LandingPage}
      />
      <Route
        path='/experience'
        exact
        component={Experience}
      />
      <Route
        path='/contact'
        exact
        component={Contact}
      />
    </>
  </Router>
);

export default App;
