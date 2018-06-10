
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'


export default class Usersignup extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this)

	}

	async fetchData( ) {

		//url + `/api/0.1/company/${window.username}`
		try {

		//	console.log("sending request:", url + `/api/0.1/companies/${window.sessionStorage.getItem("username")}`)


	    	let response = await fetch( url + `/api/0.1/companies` )
	    	console.log(response)

	    	this.companyList = await response.json();

			this.setState({})

		} catch (e) {

       		console.log(e)
       		this.companyList = []

       	}

	}

	componentDidMount(props) {

		//try {
       	this.fetchData()

    }

	async handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		data.append("accountType", "member")

		console.log("data", data)

		var formBody = [];
		for (var key of data.keys()) {
		  var encodedKey = encodeURIComponent(key);
		  var encodedValue = encodeURIComponent(data.get(key));
		  formBody.push(encodedKey + "=" + encodedValue);
		}
		formBody = formBody.join("&");

		let resp = await fetch( url + '/api/0.1/users/create', {
			method: 'POST',
			body: formBody,
			headers: { 'Content-Type' : 'application/x-www-form-urlencoded' }
		})

		window.sessionStorage.setItem("usersignup", true)
		const response = await resp.json();
		console.log("resp:", response)
		//let body = await resp.body.json()
	}

	render() {

		//let companyList = {this.props}
		let companyList = this.companyList ?  this.companyList: []

		// [ [id, string] , ...]

		//return window.usersignup ? (<Redirect to= { '/userdashboard' } /> ) :
		 return (
			<Container>
					<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3>Sign up Form -  Company User </h3>	</Col></Row>
					<Row> <Col sm={{ size: 3 }}>
				<form onSubmit={this.handleSubmit}>
					<FormGroup>
					<Label for="name" > Name </Label>
					<Input type="text" name="username" id="name" />
					</FormGroup>
					<FormGroup>
					<Label for="password" > Password </Label>
					<Input type="password" name="password" id="password" />
					</FormGroup>
					<FormGroup>
						<Label for="type"> Category </Label>
						<Input type="select" name="companyId" id="type" >
						{companyList.map( (company, i) => { return ( <option value={company._id} id={i} key={i}> {company.name} </option> ) }) }
						</Input>
					</FormGroup>
					<FormGroup>
					<Label for="firstname" > First name </Label>
					<Input type="text" name="firstname" id="firstname" />
					</FormGroup>
					<FormGroup>
					<Label for="lastname" > Last name </Label>
					<Input type="text" name="lastname" id="lastname" />
					</FormGroup>
					<Button type="submit"> Submit </Button>
				</form>
			</Col>
			</Row>
		</Container>

		)
	}
}
