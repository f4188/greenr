import React from 'react'
import PropTypes from 'react'

//import TabContainer from '@material-ui/core/TabContainer'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
//import SwipeableViews from '@material-ui/core/SwipeableViews'
import AppBar from '@material-ui/core/AppBar'

//import AdminSignupForm from '../components/AdminSignupForm.js'
//import UserSignupForm from '../components/UserSignupForm.js'

//import { createAccountAction } from '../actions.js'
import { AdminSignupForm, UserSignupForm } from '../components/SignupForm.js'

//http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086


let formTab = ({processForm, changeUser, errors, user, form}) => {

	return (
		//<TabContainer>
			<form
				onSubmit={processForm}
				onChange={changeUser}
				errors={errors}
				user={user}
			/>
	)
}

class SignupPage extends React.Component {

	constructor(props, context) {
		super(props, context)

		//this.state.user.admin = this.props.admin

		this.processForm = this.processForm.bind(this)
		this.changeUser = this.changeUser.bind(this)

	}

	getInitialState() {

		this.state = {
			errors: {},
			admin : false,
			user: {
				'firstname' : '',
				'lastname' : '',
				'email' : '',
				'password' : '',
				'companyName' : '',
				'logoUrl' : ''
			}
		}

	}

	async processForm(e) {

		e.preventDefault()
	//	createAccountAction(e.target.value)

	}

	changeUser(e) {

		const field = e.target.name
		const user = this.state.user
		user[field] = e.target.value

		this.setState({ user })

	}

	handleTabChangeIndex(index) {

		this.setState({ admin : false })

	}

	handleTabChange(event, value) {

		//let tabIndex = { ...this.state.tabIndex }
		//tab
		//this.setState( { tableIndex : 0 } )
	}

	render() {

		let formProps = { 'processForm' : this.processForm, 
					'changeUser' : this.changeUser, 
					'errors' : this.state.errors , 
					'user' : this.state.user }

		return (

			<div>
			<AppBar position="static">
				<Tabs value={this.state.tabIndex} onChange={this.handleTabChange}>
				<Tab label="User" />
				<Tab label="Admin" />
				</Tabs>
			</AppBar>

			<div index={this.state.tabIndex} onChangeIndex={this.handleTabChangeIndex} >

				<formTab {...formProps} form={UserSignupForm} />

				<formTab {...formProps} form={AdminSignupForm} />

			</div>
			</div>

		)
	}
}

SignupPage.contextTypes = {
	//router : PropTypes.object.isRequired
}



export default SignupPage