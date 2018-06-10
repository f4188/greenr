
import React, { Component } from 'react';
//import { Jumbotron } from 'reactstrap'
import { Switch, Route } from 'react-router-dom'


import Home from 'Home.js'
import Signin from 'Signin.js'
import Signup from 'Signup.js'
import Event from 'Event.js'
import Dashboard from 'Dashboard.js'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/signin' component={Signin} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} /> 
        <Route path='/events' component={Event} />
      </Switch>
    )
  }
}

export default App;


