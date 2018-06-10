import React from 'react'
import fetch from 'isomorphic-fetch'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'

export default class Userdashboard extends React.Component {

	async fetchUserData() {

	    let response = await fetch( url + '/api/user/')
	    
	    return await response.json();
	  
	}

	componentWillReceiveProps(nextProps) {

       let userData = this.fetchUserData()
    
    }
	
	render() {

		return (
			<div>
			</div>
		)
	}
}