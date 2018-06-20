
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class EventSummary extends React.Component {

	constructor(props) {
		super(props);

		console.log(props.match)

	//	this.eventId = props.eventId
		this.eventId = 23
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

		let event = { name : "Beach Cleanup", 'desciption' : "Not only is it more pleasant to spend time at a clean beach, but a clean beach means less trash makes it into the ocean. Plastics are the worst offenders because they break up into smaller and smaller pieces, becoming microplastics. Those microplastics are ingested by fish, zooplankton, and invertebrates, then make their way back up the food chain. ", "category" : "some category", "points" : 500, "date" : "Mon, June 23, 2027 "}

		return (
			<Container>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Event Description </h3> </Col></Row>

				<Row>
					<p> name {event.name}: </p>
				</Row>
				<Row>
					<p> description: {event.description} </p>
				</Row>
				<Row>
					<p> category: {event.category} </p>
				</Row>
				<Row>
					<p> points: {event.points} </p>
				</Row>
				<Row>
					<p> time: {event.date} </p>
				</Row>
				<Row>
					<Button> Signup </Button>
				</Row>
			
			</Container>
		)
	}
}