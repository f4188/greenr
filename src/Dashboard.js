import React from 'react'
import fetch from 'isomorphic-fetch'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class Dashboard extends React.Component {

	async fetchData( cid ) {

	    let response = await fetch( url + "/api/")
	    
	    return await response.json();
	  
	}

	componentWillReceiveProps(nextProps) {

       let data = this.fetchData()
    
    }
	
	render() {

		return (
			<Container>

				<Row> Dashboard
				</Row>

				<Row>
				<Col xs="2"> </Col>
				<Col xs="10"> </Col>
				</Row>
			</Container>
		)
	}
}