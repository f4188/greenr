import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { Button } from 'reactstrap'

import { Jumbotron } from 'reactstrap'

import { Media } from 'reactstrap'

export default class Home extends Component {

	render() {
	    return (
		     <div>
		     	<Jumbotron fluid>
		     		<Container fluid>
		     			<h1 className=""> Greenr </h1>
		     			<p> Be a sustainability leader </p>

		     			<p> Mission: Advancing everyone towards sustainability </p>
		     			<Button> Get Started </Button>

		     			<h2> How it works </h2>

		     			<h3> Register </h3>

		     			<p> The companies and its employees register into the Greenr platform </p>

		     			<h3> Create Sustainable Events </h3>

		     			<p> Company Admin selects from the given set of events or create your own event </p>

		     			<h3> Signup for the event </h3>

		     			<p> The employees signup for events that are interesting </p>

		     			<h3> Get rewards! </h3>

		     			<p> Users can know how much economic impact they have made and also can redeem points </p>

		     		</Container>
		     	</Jumbotron>
		     </div>
	    )
  	}
}
