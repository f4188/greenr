import React from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

export default class Dashboard extends React.Component {
	
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