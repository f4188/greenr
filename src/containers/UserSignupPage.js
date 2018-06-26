import React from 'react'
import PropTypes from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import store from '../store.js'

import { AdminSignupForm, UserSignupForm } from '../components/SignupForm.js'

//http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086

class UserSignupPage extends React.Component {

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

		let {errors, user} = this.props
		let processForm = this.processForm
		let changeUser = this.changeUser

		return (


			<div>
			<div style={{ paddingTop: 56}} />	

			<Grid container xs={12} direction="column" alignItems="center">
			<Grid item style={{ padding: 40}} xs={6}>

			<Paper style={{ padding: 40 }}>
			<UserSignupForm processForm changeUser errors user/>
			</Paper>

			</Grid>
			</Grid>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return {
		errors: {summary: "", name: ""},
		loading: "",
		data: "",
		user: { name: ""}
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

UserSignupPage.contextTypes = {
}



export default connect(mapStateToProps, mapDispatchToProps)(UserSignupPage)