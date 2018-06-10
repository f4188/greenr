
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Row, Col, Container } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class Event extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch( url + '/api/0.1/event/create', {
			method: 'POST',
			body: data,
		})
	}
	
	render() {

		return (

			<Container>
					<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Create event </h3>	</Col></Row>
					<Row> <Col sm={{ size: 3 }}>

			<Form>
				<FormGroup>
					<Label for="name"> Name </Label>
					<Input type="text" name="name" id="name" />
				</FormGroup>
				<FormGroup>
					<Label for="description"> Description </Label>
					<Input type="textarea" name="description" id="description" />
				</FormGroup>
				<FormGroup>
					<Label for="Image"> Image </Label>
					<Input type="text" name="imageUrl" id="website" />
				</FormGroup>
				<FormGroup>
					<Label for="points"> Points </Label>
					<Input type="text" name="text" id="points" />
				</FormGroup>
				<FormGroup>
					<Label for="type"> Category </Label>
					<Input type="select" name="category" id="type">
					<option> Something </option>
					<option> Somethingelse </option>
					</Input>
				</FormGroup>
				<FormGroup>
					<Label for="datetime"> Date </Label>
					<Input type="date" name="date" id="datetime"/>
				</FormGroup>
				<FormGroup>
					<Label for="username" > User </Label>
					<Input type="text" name="username" id="username" />
				</FormGroup>
				<Button onClick={this.handleSubmit}> Submit</Button>
			</Form>

			</Col>
			</Row>
		</Container>

		)
	}
}