import React from 'react'

import Auth from '.../modules/Auth'

class Logout extends React.Component {
	
	componentDidMount() {

		Auth.deauthenticateUser()
		this.props.history.push('/')

	}

	render() {

		return( <div> Logging out </div> )
	}
}