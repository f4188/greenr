import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Home from './components/HomePage.js'
import Signup from './containers/SignupPage.js'
import Logout from './containers/Login.js'
import Logout from './containers/Logout.js'

import Dashboard from './containers/Dashboard.js'

import Auth from './utils/Auth'

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

  updateAuthStatus() {

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
        
          <Route exact path='/' component={HomePage} authStatus={()=>this.updateAuthStatus()} />

          <LoggedOutRoute path="/login" component={LoginPage} authStatus={()=>this.updateAuthStatus()} />
          <LoggedOutRoute path="/signup" component={SignupPage} />
          <Route path='logout' component={Logout} />

          <PrivateRoute path='/AdminDashboard' component={Dashboard} />

        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
