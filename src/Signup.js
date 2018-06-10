
import React from 'react'
import { Form, Label, Input, FormText } from 'reactstrap'

import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import { Container, Row, Col } from 'reactstrap';
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

		console.log(event)

		const data = new FormData(event.target)

		console.log("Form Data:")
		console.log("Company name:",data.get("companyName"))
		console.log("Website:", data.get("companyWebsite"))
		console.log("Username:", data.get("username"))

		window.signedup = true
		window.sessionStorage.setItem("signedup", true)

		window.username = data.get("username")
		window.sessionStorage.setItem("username", data.get("username"))
		var formBody = [];
		for (var key of data.keys()) {
			var encodedKey = encodeURIComponent(key);
			var encodedValue = encodeURIComponent(data.get(key));
			formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");
		let resp = await fetch( url + '/api/0.1/company/create', {
			method: 'POST',
			body: formBody,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
		})

		this.setState({})

	}

	render() {

		return window.signedup ? (<Redirect to= { '/dashboard' } /> ) :
		(
		<Container>
        <Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3>Sign up Form -  Company Admin </h3>	</Col></Row>
				<Row> <Col sm={{ size: 3 }}>
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
					<Label for="company"> Company Name </Label>
					<Input type="text" name="companyName" id="company" />
				</FormGroup>
				<FormGroup>
					<Label for="Website"> Company Website Address </Label>
					<Input type="text" name="companyWebsite" id="website" />
				</FormGroup>
				<FormGroup>
					<Label for="logo"> Company Logo URL </Label>
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
					<Label for="first"> First name </Label>
					<Input type="text" name="firstname" id="first" />
				</FormGroup>
				<FormGroup>
					<Label for="last"> Last name </Label>
					<Input type="text" name="lastname" id="last" />
				</FormGroup>
				<Button type="submit"> Submit </Button>
			</form>
		</Col>
		</Row>
	</Container>


		)
	}
}
