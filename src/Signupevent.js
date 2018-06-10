
import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Signupevent extends React.Component {

	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch('/api/0.1/', {
			method: 'POST',
			body: data,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
	}
	
	render() {

		return (

			<Container>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Signup to Event </h3>	</Col></Row>
				<Row> <Col sm={{ size: 3 }}>
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
				<Label for="name" > Name </Label>
				<Input type="text" name="name" id="name" />
				</FormGroup>
				
				<Button type="submit"> Signup </Button>
			</form>
		</Col>
		</Row>
	</Container>

		)
	}
}