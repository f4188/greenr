
import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Signin extends React.Component {

	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch('/api/', {
			method: 'POST',
			body: data,
		})
	}
	
	render() {

		return (

			<Form>
				<FormGroup>
				<Label for="name" > Name </Label>
				<Input type="text" name="name" id="name" />
				</FormGroup>
				<FormGroup>
				<Label for="password" > Password </Label>
				<Input type="password" name="password" id="password" />
				</FormGroup>
				<FormGroup>
					<Label for="type"> Category </Label>
					<Input type="select" name="category" id="type" />
					<option> Something </option>
					</Input>
				</FormGroup>
				<Button onClick={this.handleSubmit}> Submit </Button>
			</Form>
			

		)
	}
}