
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class EventDesc extends React.Component {

	constructor(props) {
		super(props);
		//this.handleSubmit = this.handleSubmit.bind(this)
	}

	async fetchData(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch( url + '/api/event/create', {
			method: 'POST',
			body: data,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
		})
	}
	
	render() {

		return (
			<Container>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Company members </h3> 	</Col></Row>

				<Row>
					<p> name: </p>
					<p> description: </p>
					<p> category: </p>
					<p> points: </p>
					<p> time: </p>
					<Button> Signup </Button>
				</Row>
			
			</Container>
		)
	}
}