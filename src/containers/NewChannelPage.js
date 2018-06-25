import React from 'react'
import PropTypes from 'react'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Grid from '@material-ui/core/Grid'

import { connect } from 'react-redux'
import store from '../store.js'

import { AdminSignupForm } from '../components/SignupForm.js'

class NewChannelPage extends React.Component {

	constructor(props, context) {
		super(props, context)
		this.processForm = this.processForm.bind(this)
		this.changeUser = this.changeUser.bind(this)

	}

	async processForm(e) {

		e.preventDefault()
	//	createAccountAction(e.target.value)

	}

	changeUser(e) {

		//const field = e.target.name
		//const user = this.state.user
		//user[field] = e.target.value

		//this.setState({ user })

	}

	handleTabChangeIndex(index) {

		//this.setState({ admin : false })

	}

	handleTabChange(event, value) {

		this.setState({ tabIndex: event.target.value})

	}

	render() {

		let {processFrom, errors, user, changeUser} = this.props

		return (

			<div>
				<Grid container xs={12} direction="column" alignItems="center">
					<Grid item>
					<Typography variant="headline"> Set up a new company channel </Typography>
					<Typography variant="body1"> To set up a channel for your team, input your team information below and the contact
information for the person who will be responsible for managing this channel, creating
events and allocating administration permissions. </Typography>
					</Grid>
					<Grid item style={{ padding: 40}} xs={6}>

					<AdminSignupForm />

					</Grid>
				</Grid>
			</div>

		)
	}
}


const mapStateToProps = (state) => {
	return {
		error: "",
		loading: "",
		data: ""
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		'submit': () =>
			dispatch({
				type: ''
			})
	}
}

NewChannelPage.contextTypes = {
}



export default connect(mapStateToProps, mapDispatchToProps)(NewChannelPage)