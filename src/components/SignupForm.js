import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'

const AdminSignupForm = ({ onSubmit, onChange, errors, user }) => (

	<div>
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
	</div>

)

const UserSignupForm = ({ onSubmit, onChange, errors, user }) => (

	<div>
		<Card>
			<CardContent>
			<form action="/" onSubmit={onSubmit}>
				<h2 className="card-heading"> Sign Up </h2>

				{errors.summary && <p className="error-message">{errors.summary} </p>}

				<TextField floatingLabelText="First name" name="firstname" errorText={errors.name} onChange={onChange} value={user.name} />
			
				<TextField floatingLabelText="Last name" name="lastname" />
		
				<TextField floatingLabelText="Email" name="email"  />
		
				<TextField floatingLabelText="Password" name="password" />
			
				<TextField floatingLabelText="Company" name="companyName" />

			</form>
			</CardContent>
		</Card>
	</div>

)

export {AdminSignupForm, UserSignupForm}
