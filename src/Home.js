import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap'

import { Jumbotron } from 'reactstrap'

export default class Home extends Component {

	render() {
	    return (
		     <div>
		     	<Jumbotron fluid>
		     		<Container fluid>
							<Row><Col sm={{ size: 6, order: 2, offset: 3 }}>
		     			<h1 className=""> Greenr </h1>
							</Col></Row>
							<Row><Col>
							<h2> Company Admin </h2>
							<a href="/signup"><Button color="primary">Signup</Button></a>{' '}
	        		<a href="/signin"><Button color="success">Signin</Button></a>{' '}
							</Col><Col>
							<h2> Company User </h2>
							<a href="/usersignup"><Button color="primary">Signup</Button></a>{' '}
	        		<a href="/signin"><Button color="success">Signin</Button></a>{' '}
						</Col></Row>
		     		</Container>
		     	</Jumbotron>
		     </div>
	    )
  	}
}
