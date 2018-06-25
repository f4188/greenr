
import React from 'react'

import NewEventForm from '../container/NewEventForm.js'

import Paper from '@material-ui/core/Paper'

export default class NewEventPage extends React.Component {
	
	render() {

		//onSubmit, onChange, errors, user
		return (

			<div>
			<Paper>
			<NewEventForm onChange={this.onChange} onSubmit={this.onSubmit} />
			</Paper>
			</div>

		)
	}
}