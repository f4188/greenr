import React from 'react'
import fetch from 'isomorphic-fetch'

import { Container, Row, Col } from 'reactstrap'
import { Card, Button, CardTitle, CardText, CardColumns } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap'

import { Link } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'



//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'

export default class UserDashboard extends React.Component {

	constructor(props) {
		super(props)


	}

	async fetchUserData() {

	    let response = await fetch( url + '/api/0.1/user/')
	    
	    return await response.json();
	  
	}

	componentWillReceiveProps(nextProps) {

       let userData = this.fetchUserData()
    
    }

    componentDidMount() {
    	
    }
	
	render() {

		return (

			<AppBar>
			<Toolbar>
				<Typegraphy noWrap>
				</Typegraphy>
			</Toolbar>
			</AppBar>

			<main className={}>

			</main>

			</main>
			
		)
	}
}