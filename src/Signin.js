
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';

import { Redirect } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class Usersignup extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	handleSubmit(event) {
		event.preventDefault()

		const data = new FormData(event.target)

		window.signedin = true
		window.sessionStorage.setItem("signedup", true)

		window.username = data.get("username")
		window.sessionStorage.setItem("username", data.get("username"))


	//	fetch( url + '/api/user/', {
	//		method: 'POST',
	//		body: data,
	//	})

		this.setState({})
	}

	render() {

		let companyList = [ 'foo', 'bar' ]

		//console.log(window)

		return window.signedin ? (<Redirect to= { '/dashboard' } /> ) :
	
		(
			<Container>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3>Login Form</h3>	</Col></Row>
				<Row> <Col sm={{ size: 3 }}>
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
				<Label for="name" > Name </Label>
				<Input type="text" name="name" id="name" />
				</FormGroup>
				<FormGroup>
				<Label for="password" > Password </Label>
				<Input type="password" name="password" id="password" />
				</FormGroup>
				<FormGroup>
					<Label for="type"> Company </Label>
					<Input type="select" name="company" id="type" >
					{companyList.map( (company, i) => { return ( <option id={i}> {company} </option> ) }) }
					</Input>
				</FormGroup>
				
				<Button type="submit"> Submit </Button>
			</form>
			</Col>
			</Row>
		</Container>
		)

	}
}
