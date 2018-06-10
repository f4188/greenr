
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)


	}

	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch( url + '/api/user/create', {
			method: 'POST',
			body: data,
		})
	}
	
	render() {

		//let companyList = {this.props}
		let companyList = [ 'foo', 'bar' ]

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
					<Input type="select" name="category" id="type" >
					{companyList.map( (company, i) => { return ( <option id={i}> company </option> ) }) }
					</Input>
				</FormGroup>
				<Button onClick={this.handleSubmit}> Submit </Button>
			</Form>
			

		)
	}
}