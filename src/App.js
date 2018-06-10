import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home.js'
import Usersignup from './Usersignup.js'
import Signup from './Signup.js'
import Event from './Event.js'
import Dashboard from './Dashboard.js'
import Userdashboard from './Userdashboard.js'

class App extends Component {

  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/usersignup' component={Usersignup} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} /> 
        <Route path='/events' component={Event} />
        <Route path='/userdashboard' component={Userdashboard} />
      </Switch>
      </div>
    )
  }
}

export default App;


