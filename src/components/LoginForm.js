
import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'

const LoginForm = ({ onSubmit, onChange, errors, successMsg, user, checkAuth}) => {
	
	<Card className="container">
		<CardContent>
		<form action="/" onSubmit={onSubmit}>
			<h2 className="card-heading"> Login </h2>

			{errors.summary && <p className="error-message">{errors.summary} </p>}

			<div className="field-line">
				<TextField floatingLabelText="Email" name="email" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Password" name="password" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>

		</form>
		</CardContent>
	</Card>

}

LoginForm.propTypes = {

	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	successMsg: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired

}

export default LoginForm
