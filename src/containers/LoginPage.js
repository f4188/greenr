import React from 'react'

import LoginForm from '../components/LoginForm.js'

class LoginPage extends React.Component {

	constructor(props, context) {
		super(props, context)

		//this.state = {
		//	errors: {},
		//	user: {
		//		email: '',
		//		password: ''
		//	}
		//}

		this.processForm = this.processForm.bind(this)
		this.changeUser = this.changeUser.bind(this)

	}

	async processForm(e) {

		e.preventDefault()

		

		//let form = createForm({ 'name' : this.state.user.name , 'email' : this.state.user.email, 'password' : this.state.user.password })
		//let resp = await sendForm()

	}

	changeUser(e) {

		const field = e.target.name
		const user = this.props.user //this.state.user
		user[field] = e.target.value

		//this.setState({ user })

	}

	render() {

		return (
			<LoginForm
				onSubmit={this.processForm}
				onChange={this.changeUser}
				errors={this.state.errors}
				user={this.state.user}
			/>
		)
	}
}

export default LoginPage