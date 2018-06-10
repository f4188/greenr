import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

import { Jumbotron } from 'reactstrap'

import { Media } from 'reactstrap'

export default class Home extends Component {

	render() {
	    return (
		     <div>
		     	<Jumbotron fluid>
		     		<Container fluid>
						
						<Row> <Col sm={{ size: 6, order: 2, offset: 3 }}>
		     			<h1 className=""> Greenr </h1>

		     			<p> Be a sustainability leader </p>

		     			<p> Mission: Advancing everyone towards sustainability </p>

		     			<Row><Col>
							<h2> Company Admin </h2>
							<a href="/signup"><Button color="primary">Signup</Button></a>{' '}
	        		<a href="/signin"><Button color="success">Signin</Button></a>{' '}
							</Col><Col>
							<h2> Company User </h2>
							<a href="/usersignup"><Button color="primary">Signup</Button></a>{' '}
	        		<a href="/signin"><Button color="success">Signin</Button></a>{' '}
						</Col></Row>
						</Col></Row>

						</Container>
				</Jumbotron>

				



				<Container>
<Row>
<Col >
		     			<h2> How it works </h2>

		     			<h3> Register </h3>

		     			<p> The companies and its employees register into the Greenr platform </p>

		     			<h3> Create Sustainable Events </h3>

		     			<p> Company Admin selects from the given set of events or create your own event </p>

		     			<h3> Signup for the event </h3>

		     			<p> The employees signup for events that are interesting </p>

		     			<h3> Get rewards! </h3>

		     			<p> Users can know how much economic impact they have made and also can redeem points </p>

</Col>
</Row>		

	</Container>

		     </div>
	    )
  	}
}
