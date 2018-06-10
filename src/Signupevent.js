
import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class Signupevent extends React.Component {

	constructor() {
		super()
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(event) {
		event.preventDefault()
		const data = new FormData(event.target)

		fetch('/api/', {
			method: 'POST',
			body: dataa,
		})
	}
	
	render() {

		return (

			<div>

			</div>
			<Button onClick={this.handleSubmit}> Submit </Button>

		)
	}
}