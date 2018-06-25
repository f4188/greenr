import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const AdminSignupForm = ({ onSubmit, onChange, errors, user }) => (

	<div>
		<Card>
			<CardContent>
			<form action="/" onSubmit={onSubmit} >
				<h2 className="card-heading"> Sign Up </h2>

				{errors.summary && <p className="error-message">{errors.summary} </p>}

				<TextField style={{ marginLeft: 10, marginRight: 10}} label="First name" name="firstname" margin="normal" errorText={errors.name} onChange={onChange} value={user.name} />

				<TextField label="Last name" name="lastname" margin="normal" errorText={errors.name} onChange={onChange} value={user.name} />

				<TextField label="Email" name="email" margin="normal" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField label="Password" name="password" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField label="Company" name="companyName" errorText={errors.name} onChange={onChange} value={user.name}/>

				<TextField label="Company Logo URL" name="logoUrl" errorText={errors.name} onChange={onChange} value={user.name}/>

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

				{errors.summary && <p className="error-message">{errors.summary} </p>}
				<div>
				<TextField label="First name" name="firstname" style={{marginRight: 20}} errorText={errors.name} onChange={onChange} value={user.name} />
				
				<TextField label="Last name" name="lastname" />
				</div>
				<div>
				<TextField label="Email" name="email"  />
				</div>
				<div>
				<TextField label="Password" name="password" />
				</div>
				<div>
				<TextField label="Company" name="companyName" />
				</div>
				<Button style={{ marginTop: 20}} variant="raised"> Sign Up </Button>
			</form>
			</CardContent>
		</Card>
	</div>

)

export {AdminSignupForm, UserSignupForm}
