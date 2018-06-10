
import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Signin extends React.Component {
	
	render() {

		return (

			<Form>
				<FormGroup>
				<Label for="name" > Name </Label>
				<Input type="text" name="name" id="name" />
				</FormGroup>
				<FormGroup>
				<Label for="password" > Password </Label>
				<Input type="password" name="password" id="password" />
				</FormGroup>
				<FormGroup>
				<Label for="company" > Company </Label>
				<Input type="text" name="text" id="text" />
				</FormGroup>
			</Form>
			

		)
	}
}