import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

const NewEventForm = ({ onSubmit, onChange, errors, user }) => (

	<div>
		<Paper>
		<Card>
			<CardContent>
			<form action="/" onSubmit={onSubmit}>
				<h2 className="card-heading"> Sign Up </h2>

				{errors.summary && <p className="error-message">{errors.summary} </p>}

				<TextField floatingLabelText="First name" name="firstname" errorText={errors.name} onChange={onChange} value={user.name} />

				<TextField floatingLabelText="Last name" name="lastname" errorText={errors.name} onChange={onChange} value={user.name} />

				<TextField floatingLabelText="Email" name="email" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField floatingLabelText="Password" name="password" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField floatingLabelText="Company" name="companyName" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField floatingLabelText="Company Logo URL" name="logoUrl" errorText={errors.name} onChange={onChange} value={user.name}/>

			</form>
			</CardContent>
		</Card>
		</Paper>
	</div>

)

export default EventForm