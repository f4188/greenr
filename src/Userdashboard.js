import React from 'react'
import fetch from 'isomorphic-fetch'

import { Container, Row, Col } from 'reactstrap'
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'

import { Link } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'



//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'

export default class Userdashboard extends React.Component {

	async fetchUserData() {

	    let response = await fetch( url + '/api/0.1/user/')
	    
	    return await response.json();
	  
	}

	componentWillReceiveProps(nextProps) {

       let userData = this.fetchUserData()
    
    }
	
	render() {

		let eventList = [ "event1", "event2", "event3", "event4", "event5", "event5", "event6" ]

		return (
			<Container>

				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> User Dasboard </h3> 	</Col></Row>

				<Row>
				<Col xs="2"> 
					<Row>
						<Link to="/events"> Events </Link>
					</Row>
					<Row>
						<Link to="/rewards" >Rewards </Link>
					</Row>
				</Col>
			
				</Row>

				<Row>
				<Col md={{ size: 10, offset: 2 }}>

					{ eventList.map( (events, i) => {

						return (
						<CardColumns>
					      <Card body id={i} key={i}>
					        <CardTitle> Event # {i}</CardTitle>
					        <CardText> Some event.</CardText>
					     
					         <a href="/eventdesc"><Button color="primary"> Join </Button></a>{' '}
					      </Card>
					    </CardColumns>
				      )

				    })}
				</Col>
				</Row>
			</Container>
		)
	}
}