
import React, { Component } from 'react';
//import { Jumbotron } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'


import Home from './Home.js'
import Signin from './Signin.js'
import Signup from './Signup.js'
import Event from './Event.js'
import Dashboard from './Dashboard.js'
import Userdashboard from './Userdashboard.js'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} /> 
        <Route path='/events' component={Event} />
        <Route path='userdashboard' component={Userdashboard} />
      </Switch>
    )
  }
}

export default App;


