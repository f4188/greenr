import React from 'react'

import AdminSignupForm from '../components/AdminSignupForm.js'
import UserSignupForm from '../components/UserSignupForm.js'

//http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086

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
				'firstname' : '',
				'lastname' : '',
				'logoUrl' : ''
			}
		}

	}

	async processForm(e) {

		e.preventDefault()
		createAccountAction(e.target.value)

	}

	changeUser(e) {

		const field = e.target.name
		const user = this.state.user
		user[field] = e.target.value

		this.setState({ user })

	}

	tabChange(event, value) {

		//let tabIndex = { ...this.state.tabIndex }
		//tab
		this.setState( { tableIndex : } )
	}

	render() {

		return (

			<AppBar position="static">
				<Tabs value={this.state.tabIndex} onChange={this.tabChange}>
				<Tab label="User" />
				<Tab label="Admin" />
				</Tabs>
			</AppBar>

			<SwipeableViews index={this.state.tabIndex} onChangeIndex={this.handleChangeIndex}>

				<TabContainer>
					<UserSignupForm
						onSubmit={this.processForm}
						onChange={this.changeUser}
						errors={this.state.errors}
						user={this.state.user}
					/>
				</TabContainer>

				<TabContainer>
					<AdminSignupForm>
						onSubmit={this.processForm}
						onChange={this.changeUser}
						errors={this.state.errors}
						user={this.state.user}
					/>
				</TabContainer>

			</SwipeableViews>
		)
	}
}

SignUpPage.contextTypes = {
	router : PropTypes.object.isRequired
}

export default SignupPage