import React from 'react'

import Auth from '../Auth.js'

export default class Logout extends React.Component {
	
	componentDidMount() {

		Auth.deauthenticateUser()
		this.props.history.push('/')

	}

	render() {

		return( <div> Logging out </div> )
	}
}