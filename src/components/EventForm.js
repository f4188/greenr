
<Form>
				<FormGroup>
					<Label for="name"> Name </Label>
					<Input type="text" name="name" id="name"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="description"> Description </Label>
					<Input type="textarea" name="description" id="description"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="Image"> Image </Label>
					<Input type="text" name="" id="website"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="text"> Points </Label>
					<Input type="text" name="text" id="text">
				</FormGroup>
				<Button>Submit</Button>
			</Form>

const EventForm = ({ onSubmit, onChange, errors, user }) => (

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