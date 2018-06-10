
import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class Members extends React.Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.fetchData.bind(this)

	}

	async fetchData(event) {
		//event.preventDefault()
		//const data = new FormData(event.target)

		/*fetch( url + '/api/user/create', {
			method: 'POST',
			body: data,
		})*/
	}

	render() {

		let memberData = [ [ 'John Aaron', 'aaron12@eeyrie.com'], [ 'Cersei', 'cersai001@lannisport.com'] ]

		return (

			<div>

			<Jumbotron fluid>
			<Container fluid>
				<Row> <Col sm="12" md={{ size: 8, offset: 2 }}><h3> Company members </h3> 	</Col></Row>

				
			
			</Container>
			</Jumbotron>

			<Row>
			<Col sm="10" md={{ size: 8, offset: 2 }}>
				{memberData.map( (member, i) => { return ( <Row> <Col sm={{ size: 3 }}> { member[0] } </Col> <Col sm={{ size: 3 }}> { member[1] } </Col>
			</Row> ) }) }
			</Col>
			</Row>

			</div>

		)
	}
}
