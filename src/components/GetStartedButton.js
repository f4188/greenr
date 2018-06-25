
import React from 'react'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'


class GetStartedButton extends React.Component {

	state = {
	    anchorEl: null,
	}

	handleClick = event => {
		this.setState({ anchorEl: event.currentTarget });
	}

	handleClose = () => {
	    this.setState({ anchorEl: null });
	};

	render() {

		const { anchorEl } = this.state;

		return (<span>
	        <Button  
	        	variant="outlined"
	        	aria-owns={anchorEl ? 'simple-menu' : null}
         	 	aria-haspopup="true"
          		onClick={this.handleClick}
          	>
	          Get Started
	        </Button>
	        <Menu
	          id="simple-menu"
	          anchorEl={anchorEl}
	          open={Boolean(anchorEl)}
	          onClose={this.handleClose}
	        >
	          <MenuItem onClick={this.handleClose}>Sign up</MenuItem>
	          <MenuItem onClick={this.handleClose}>Create a new channel</MenuItem>
	        </Menu>
	      </span>)
	}
}

export default GetStartedButton;