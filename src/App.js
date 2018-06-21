import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//general components
import Home from './components/Home.js'
import Signup from './components/Signup.js'
import Signin from './components/Signin.js'

//
import Event from './components/Event.js'
import Dashboard from './components/AdminDashboard.js'
import Userdashboard from './components/Userdashboard.js'
import Members from './components/Members.js'
import EventDesc from './components/EventDesc.js'

import Rewards from './Rewards.js'

const PrivateRoute = ( { component: Component, ...rest }) => {

  <Route {...rest} render = {props => (
      Auth.isAthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
    )}/>
}

const LoggedOutRoute = ( { component: Component, ...rest } ) => ({
  <Route {...rest} render={props => (
    Auth.isAthenticated() ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
      ) : (
        <Component {...props} {...rest} />
      )
    )} />
})

const PropsRoute = ( { component: Component, ...rest } ) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
    )}/>
)

class App extends Component {

  constructor(props) {

    super(props) 
    this.state = {
      authenticated: false
    }

  }

  componentDidMount() {

    this.checkAuth()

  }

  checkAuth() {

    this.setState({ authenticated: Auth.isAthenticated() })

  }


  render() {
    
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Router>
          <div>

            <div className="top-bar">
              <div classNmae="top-bar-left">
                <Link to="/"> </Link>
            </div>

            {this.state.authenticated ? (
              <div> 
                <Link to="/dashboard"> Dashboard </Link>
                <Link to="/logout"> Logout </Link>
              </div>
            ) : (
              <div>
                <Link to="/login"> Log in </Link>
                <Link to="/signup"> Sign up </Link>
              </div>
            )}

          </div>
        
          <Route exact path='/' component={HomePage} />

          <LoggedOutRoute path="/login" component={LoginPage} />
          <LoggedOutRoute path="/signup" component={SignupPage} />

          <PrivateRoute path='/dashboard' component={AdminDashboard} />
          <PrivateOutRoute path='/userdashboard' component={UserDashboard} />

        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
