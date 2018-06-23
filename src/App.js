import React, { Component } from 'react'
import { BrowserRouter, Router, Route, Link, Redirect } from 'react-router-dom'

//import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

//general components
import HomePage from './components/HomePage.js'
import SignupPage from './containers/SignupPage.js'
import LoginPage from './containers/Login.js'
import Logout from './components/Logout.js'

import AdminDashboard from './containers/AdminDashboard.js'
import Userdashboard from './containers/Userdashboard.js'

import Auth from './utils/Auth'

const PrivateRoute = ( { component: Component, ...rest }) => (

  <Route {...rest} render = {props => (
      Auth.isAthenticated() ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }}/>
        )
    )} />
)

const LoggedOutRoute = ( { component: Component, ...rest } ) => (
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
)

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
      <div>

        <Router>



          <AppBar position="static">

            <Toolbar>

              <div className="top-bar-left">
                <Link to="/"> </Link>
              </div>

            { this.state.authenticated ? (
              <div> 
                <Link to="/dashboard"> Dashboard </Link>
                <Link to="/logout"> Logout </Link>
              </div>
            ) : (
              <div>
                <Link to="/login"> Log in </Link>
                <Link to="/signup"> Sign up </Link>
              </div>
            ) }

            </Toolbar>

          </AppBar>          
        
          <Route exact path='/' component={HomePage} />

          <LoggedOutRoute path='/login' component={LoginPage} />
          <LoggedOutRoute path='/signup' component={SignupPage} />

          <PrivateRoute path='/dashboard' component={AdminDashboard} />
          <PrivateRoute path='/userdashboard' component={UserDashboard} />

          <Route path="/logout" component={Logout} />

        </Router>

      </div>
    )
  }
}

export default App;
