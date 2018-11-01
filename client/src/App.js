import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser'
import AllCars from './components/AllCars'
import SingleCar from './components/SingleCar'
import AccountSettings from './components/AccountSettings'
import SignupPage from './components/SignupPage'


import './App.css';

class App extends Component {
  render() {
 
    return (
     
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/users' component={AllUsers} />
      <Route exact path='/users/new' component={SignupPage} />
      <Route exact path='/users/:id' component={SingleUser} />
      <Route exact path='/users/:id/cars' component= {AllCars} />
      <Route exact path='/users/:id/cars/:id' component = {SingleCar} />
      <Route exact path='/users/:id/settings' component = {AccountSettings} />
      

    </Switch>
  </Router>
    );
  }
}

export default App
