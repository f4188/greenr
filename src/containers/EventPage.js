
import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class EventPage extends React.Component {
	
	render() {

		return (

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

		)
	}
}