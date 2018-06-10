import React from 'react'
import fetch from 'isomorphic-fetch'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

import { Link } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class Dashboard extends React.Component {

	async fetchData( ) {

	    let response = await fetch( url + `/api/company/${window.username}` )
	    
	    return await response.json();
	  
	}

	async fetchCompanyList() {

		let response = await fetch( url + `/api/companies` )
		return await response.json()

	}

	componentWillReceiveProps(nextProps) {

       this.data = this.fetchData()
       this.companyList = this.fetchCompanyList()
    
    }
	
	render() {

		return (
			<Container>

				<Row> Dashboard
				</Row>

				<Row>
				<Col xs="2"> 
					<Row>
						<Link to="" > Members </Link>
					</Row>
					<Row>
						Events
					</Row>
					<Row>
						Rewards
					</Row>
				</Col>
				<Col xs="10"> 

					<Form>
					<FormGroup>
						<Label> Invite </Label>
						<Input> </Input>
						<Button> </Button>
					</FormGroup>

					</Form>
						<Label> </Label>
						<Input> </Input>
						<Button> </Button>
						

					<Form>
					</Form>


				</Col>
				</Row>
			</Container>
		)
	}
}