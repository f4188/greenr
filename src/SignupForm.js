import React from 'react'

const AdminSignupForm = ({ onSubmit, onChange, errors, user }) => (

	<Card className="container">
		<form action="/" onSubmit={onSubmit}>
			<h2 className="card-heading"> Sign Up </h2>

			{errors.summary && <p className="error-message">{errors.summary} </p>}

			<div className="field-line">
				<TextField floatingLabelText="First name" name="firstname" errorText={errors.name} onChange={onChange} value={user.name} />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Last name" name="lastname" errorText={errors.name} onChange={onChange} value={user.name} />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Email" name="email" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Password" name="password" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Company" name="companyName" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Company Logo URL" name="logoUrl" errorText={errors.name} onChange={onChange} value={user.name}/>
			</div>


		</form>
	</Card>

)

const UserSignupForm = ({ onSubmit, onChange, errors, user }) => (

	<Card className="container">
		<form action="/" onSubmit={onSubmit}>
			<h2 className="card-heading"> Sign Up </h2>

			{errors.summary && <p className="error-message">{errors.summary} </p>}

			<div className="field-line">
				<TextField floatingLabelText="First name" name="firstname" errorText={errors.name} onChange={onChange} value={user.name} />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Last name" name="lastname" />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Email" name="email"  />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Password" name="password" />
			</div>

			<div className="field-line">
				<TextField floatingLabelText="Company" name="companyName" />
			</div>

		</form>
	</Card>

)

export {AdminSignupForm, UserSignupForm}
