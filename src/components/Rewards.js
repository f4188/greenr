
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class Rewards extends React.Component {

	constructor(props) {
		super(props);

		this.eventId = props.eventId
		//this.handleSubmit = this.handleSubmit.bind(this)
	}

	async fetchData(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		let resp = fetch( url + '/api/events/${this.eventId}', {
			method: 'POST',
			body: data,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8' }
		})

		let eventData = await resp.json()
		
	}
	
	render() {

		return (
			<Container>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Rewards </h3> 	</Col></Row>

				
			
			</Container>
		)
	}
}