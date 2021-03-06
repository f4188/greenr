import React from 'react'
import PropTypes from 'react'

//import TabContainer from '@material-ui/core/TabContainer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
//import SwipeableViews from '@material-ui/core/SwipeableViews'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'

//import AdminSignupForm from '../components/AdminSignupForm.js'
//import UserSignupForm from '../components/UserSignupForm.js'

//import { createAccountAction } from '../actions.js'

import { connect } from 'react-redux'

import store from '../store.js'

import { AdminSignupForm, UserSignupForm } from '../components/SignupForm.js'

//http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086

class SignupPage extends React.Component {

	constructor(props, context) {
		super(props, context)
		this.processForm = this.processForm.bind(this)
		this.changeUser = this.changeUser.bind(this)

		this.state = { tabIndex : "0"}

		this.handleTabChange = this.handleTabChange.bind(this)

	}

	async processForm(e) {

		e.preventDefault()
	//	createAccountAction(e.target.value)

	}

	changeUser(e) {

		//const field = e.target.name
		//const user = this.state.user
		//user[field] = e.target.value

		//this.setState({ user })

	}

	handleTabChangeIndex(index) {

		//this.setState({ admin : false })

	}

	handleTabChange(event, value) {

		this.setState({ tabIndex: event.target.value})

	}

	render() {

		let {processFrom, errors, user, changeUser} = this.props

		return (

			<div>
			<Grid container xs={12} direction="column" alignItems="center">
			<Grid item style={{ padding: 40}} xs={6}>

			<AppBar position="static" color="default">
				<Tabs value={this.state.tabIndex} onChange={this.handleTabChange}>
				<Tab value={"0"} label="User" />
				<Tab value={"1"} label="Admin" />
				</Tabs>
			</AppBar>

			{ this.state.tabIndex == "0" ? (<UserSignupForm processForm errors user changeUser/>) : (<AdminSignupForm />) }

			</Grid>
			</Grid>
			</div>

		)
	}
}


const mapStateToProps = (state) => {
	return {
		error: "",
		loading: "",
		data: ""
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		'submit': () =>
			dispatch({
				type: ''
			})
	}
}

SignupPage.contextTypes = {
}



export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)