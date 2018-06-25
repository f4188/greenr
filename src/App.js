import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'

//import getMuiTheme from 'material-ui/styles/getMuiTheme'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'

//general components
import HomePage from './containers/HomePage.js'
import SignupPage from './containers/SignupPage.js'
import LoginPage from './containers/LoginPage.js'
import Logout from './components/Logout.js'
import Header from './components/Header.js'
import WithHeader from './containers/WithHeader.js'
import NewChannelPage from './containers/NewChannelPage.js'

import AdminDashboard from './components/AdminDashboard.js'
import UserDashboard from './components/UserDashboard.js'

import Auth from './Auth.js'

const PrivateRoute = ( { component: Component, ...rest }) => (

  <Route {...rest} render = {props => (
      Auth.isUserAuthenticated() ? (
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
    Auth.isUserAuthenticated() ? (
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

  componentDidMount() {

//    user.addChangeListener(this.onChange)

  }

  componentWillUnmount() {

  //  user.removeChangeListener(this.onChange)

  }

  componentDidMount() {

    this.checkAuth()

  }

  onChange() {

   // this.setState({user : user.get()})

  }

  checkAuth() {

    this.setState({ authenticated: Auth.isUserAuthenticated() })

  }


  render() {


      //const Page = (
      //    )
    
    return (

        <Router>
          <Switch>
          <Route exact path='/' component={WithHeader(HomePage)} />

          <LoggedOutRoute path='/login' component={LoginPage} />
          <LoggedOutRoute path='/signup' component={WithHeader(SignupPage)} />
          <LoggedOutRoute path='/createchannel' component={WithHeader(NewChannelPage)} />

          <PrivateRoute path='/dashboard' component={WithHeader(AdminDashboard)} />
          <PrivateRoute path='/userdashboard' component={UserDashboard} />

          <Route path="/logout" component={Logout} />
          </Switch>
        </Router>

    )
  }
}

export default App;
