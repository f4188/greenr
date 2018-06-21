import React from 'react'

import SignUpForm from '.../components/SignUpForm.js'

class SignUpPage extends React.Component {

	constructor(props, context) {
		super(props, context)


	}

	processForm(e) {

		e.preventDefault()

	}

	changeUser(event) {

		const field = event.target.name
		const user = this.state.user
		user[field] = event.target.value
		
	}

	render() {

		return (
			<SignUpForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={}
				user={}
			/>
		)
	}
}

SignUpPage.contextTypes = {
	router : PropTypes.object.isRequired
}

export default SignupPage