import React from 'react'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'

export default class Userdashboard extends React.Component {
	
	render() {

		return (

			<Navbar color="light" light expand="md">
			<NavbarBrand href="/"> Dashboard </Navbarbrand>

		)
	}
}