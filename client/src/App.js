import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AllUsers from './components/AllUsers'
import SingleUser from './components/SingleUser'
import AllCars from './components/AllCars'
import SingleCar from './components/SingleCar'
import AccountSettings from './components/AccountSettings'
import SignupPage from './components/SignupPage'
import ChargingStations from './components/ChargingStations'


import './App.css';
import ChargingStations from './components/ChargingStations';

class App extends Component {
  render() {
 
    return (
     
  <Router>
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/chargingstations' component={ChargingStations} />
      <Route exact path='/users' component={AllUsers} />
      <Route exact path='/users/new' component={SignupPage} />
      <Route exact path='/users/:id' component={SingleUser} />
      <Route exact path='/users/:id/cars' component= {AllCars} />
      <Route exact path='/users/:userId/cars/:id' component = {SingleCar} />
      <Route exact path='/users/:id/settings' component = {AccountSettings} />
      

    </Switch>
  </Router>
    );
  }
}

export default App
