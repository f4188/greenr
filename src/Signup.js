
import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Redirect } from 'react-router-dom'

//http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086
const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class Signup extends React.Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	async handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		await fetch( url + '/api/company/create', {
			method: 'POST',
			body: data,
		})

		window.signedup = true
		window.username = data.username

		this.setState({})

		//window.username = data.

	}

	render() {

		return window.signedup ?  (<Redirect to= {`/company/${window.username}`} /> ) :
			( <Form>
				<FormGroup>
					<Label for="company"> Company </Label>
					<Input type="text" name="companyName" id="company" />
				</FormGroup>
				<FormGroup>
					<Label for="Website"> Company Website </Label>
					<Input type="text" name="companyWebsite" id="website" />
				</FormGroup>
				<FormGroup>
					<Label for="logo"> </Label>
					<Input type="text" name="companyLogo" id="logo" />
				</FormGroup>
				<FormGroup>
					<Label for="username"> Username </Label>
					<Input type="username" name="username" id="username" />
				</FormGroup>
				<FormGroup>
					<Label for="password"> password </Label>
					<Input type="password" name="password" id="password"/>
				</FormGroup>
				<FormGroup>
					<Label for="type"> Account Type </Label>
					<Input type="select" name="accountType" id="type">
					<option> Company </option>
					<option> Somethingelse </option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="first"> First name </Label>
					<Input type="text" name="firstname" id="first" />
				</FormGroup>
				<FormGroup>
					<Label for="last"> Last name </Label>
					<Input type="text" name="lastname" id="last" />
				</FormGroup>
				<Button onClick={this.handleSubmit}> Submit </Button>
			</Form> )
	}
}