import React from 'react'
import fetch from 'isomorphic-fetch'


import { Link } from 'react-router-dom'

const url = 'http://ec2-13-58-24-20.us-east-2.compute.amazonaws.com:8086'

export default class DashboardPage extends React.Component {

	constructor(props) {
		super(props)

		this.state = {

		}
	}

	/*
	async fetchData( ) {

		try {

			console.log("sending request:", url + `/api/0.1/companies/${window.sessionStorage.getItem("username")}`)

		    let response = await fetch( url + `/api/0.1/companies/${window.sessionStorage.getItem("username")}` )
		    console.log(response)
		    
		    this.data = await response.json();

		    let response2 = await fetch( url + `/api/0.1/companies` )
			this.companyList = await response2.json()

			//let eventList = await fetch( url + `/api/0.1/companies/${window.sessionStorage.getItem() })

			this.setState({})

		} catch (e) {

       		console.log(e)

       	}
	  
	}*/

	componentDidMount(nextProps) {

       	this.fetchData()

    }
	
    render() {

    	return ( <Dasboard /> )
    }

	/*render() {

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

						 <a href="/events"><Button> Create Event </Button> </a>{' '}
				
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
					        <a href="/eventdesc"><Button color="primary"> Add </Button></a>{' '}
					      
					      </Card>
					    </CardColumns>
				      )

				    })}
				</Col>
				</Row>
			</Container>
		)
	}*/
}