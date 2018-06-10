
import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Events extends React.Component {
	
	render() {

		return (

			<Form>
				<FormGroup>
					<Label for="company"> Company </Label>
					<Input type="text" name="" id="company"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="name"> Company </Label>
					<Input type="text" name="" id="name"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="Website"> Company </Label>
					<Input type="text" name="" id="website"> </Input>
				</FormGroup>
				<FormGroup>
					<Label for="email"> Email </Label>
					<Input type="email" name="email" id="email">
				</FormGroup>
				<FormGroup>
					<Label for="password"> password </Label>
					<Input type="password" name="" id="password"> </Input>
				</FormGroup>
			</Form>

		)
	}
}