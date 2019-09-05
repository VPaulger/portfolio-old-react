import React from 'react'
import './App.css'

//react router
import { BrowserRouter as Router, Route } from 'react-router-dom'

//material-ui
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core';


//components
import LandingPage from './LandingPage'
import About from './About'
import Experience from './Experience'
import Contact from './Contact'
import Clouds from './Clouds'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#f9f9f9',
      dark: '#c6c6c6',
      contrastText: '#000000',
    },
    secondary: {
      light: '#57dd57',
      main: '#00aa25',
      dark: '#007900',
      contrastText: '#ffffff',
    },
  },
})

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Clouds />
      <Route path="/" exact component={LandingPage} />
      <Route path="/about" exact component={About} />
      <Route path="/experience" exact component={Experience} />
      <Route path="/contact" exact component={Contact} />
    </ThemeProvider>
  </Router>
)

export default App;
