
import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ onSubmit, onChange, errors, successMsg, user, checkAuth}) => {
	
	<form action="/" onSubmit={onSubmit}>

		<h2> Login </h2>

		{ successMsg && <p>{successMsg}</p> }
		{ errors.summary && <p>{errors}</p> }

		<div>

		<input type="text" name> 

		</div>

		<div>

		</div>

		<div>
			<button> </button>
		</div>

	</form>

}


LoginForm.propTypes = {

	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
	successMsg: PropTypes.string.isRequired,
	user: PropTypes.object.isRequired

}

export default LoginForm
