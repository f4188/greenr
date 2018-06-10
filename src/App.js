import React, { Component } from 'react';

import { Jumbotron } from 'reactstrap'

import { Dashboard } from 'Dashboard.js'
import { Home } from 'Home.js'
import { Signin } from 'Signin.js'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} /> 
        <Route path='/signin' component={Signin} />
      </Switch>
    )
  }
}

export default App;


