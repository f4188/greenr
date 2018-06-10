import React from 'react'
import fetch from 'isomorphic-fetch'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'

import { Link } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class Dashboard extends React.Component {

	async fetchData( ) {

		//url + `/api/0.1/company/${window.username}`
		try {

		console.log("sending request:", url + `/api/0.1/companies/${window.sessionStorage.getItem("username")}`)


	    let response = await fetch( url + `/api/0.1/companies/${window.sessionStorage.getItem("username")}` )
	    console.log(response)
	    
	    this.data = await response.json();

	    let response2 = await fetch( url + `/api/0.1/companies` )
		this.companyList = await response2.json()

		this.setState({})

		} catch (e) {
       		console.log(e)
       	}
	  
	}

	componentDidMount(nextProps) {

		//try {
       	this.fetchData()

    }
	
	render() {

		let eventList = [ "event1", "event2", "event3", "event4", "event5", "event5", "event6" ]

		return (
			<Container>

				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Dasboard </h3> 	</Col></Row>

				<Row>
				<Col xs="2"> 
					<Row>
						<Link to="/members" > Members </Link>
					</Row> 
					<Row>
						<Link to="/events"> Events </Link>
					</Row>
					<Row>
						<Link to="/rewards" >Rewards </Link>
					</Row>
				</Col>
				<Col xs="10"> 
					<Row>
					<Col>
					<Form inline>
					<FormGroup>
						<Label for="invite"> Invite </Label> &nbsp;
						<Input type="text" name="invite" id="invite"> </Input>
						<Button> + </Button>
					</FormGroup>
					</Form>
					</Col>
					</Row>

					<Row style={{ 'margin-top' : '10px'}}>
					<Col>
					
					<Form inline>

					<Label for="newevent"> Add event </Label> &nbsp;
						<Input type="text" name="newevent" id="newevent"> </Input>
						<Button> + </Button>
					</Form>
					</Col>
					</Row>

				</Col>
				</Row>

				<Row style={{ 'margin-top' : '20px'}}>
				<Col md={{ size: 10, offset: 2 }}>

					{ eventList.map( (events, i) => {

						return (
						<CardColumns>
					      <Card body key={i}>
					        <CardTitle> Event # {i}</CardTitle>
					        <CardText> Some event.</CardText>
					        <a href="/eventdesc"><Button color="primary"> Go </Button></a>{' '}
					      
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