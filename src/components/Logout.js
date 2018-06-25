import React from 'react'

import Auth from '../Auth.js'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

export default class Logout extends React.Component {
	
	componentDidMount() {

		Auth.deauthenticateUser()
		this.props.history.push('/')

	}

	render() {

		return( 
			<div>
				<Paper>
					<Typography> Logging out </Typography>
				</Paper>
			</div> 
		)
			
	}
}