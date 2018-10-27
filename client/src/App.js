import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser'

import './App.css';

class App extends Component {
  render() {
 
    return (
     
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/users' component={AllUsers} />
      <Route exact path='/users/:id' component={SingleUser} />

    </Switch>
  </Router>
    );
  }
}

export default App
