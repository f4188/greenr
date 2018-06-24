import React from 'react'

import Menu from '@material-ui/core/Menu'
import Avatar from '@material-ui/core/Avatar'


class MenuDrop extends React.Component {
	
	state = {
		open: false
	}

	handleClick = (event) => {
		this.setState({open: true})
	}

	handleClose = () => {
		this.setState({open: false})
	}

	render() {

		let options = this.props.options || []

		return ( <div>
			<Avatar/>

			<Menu
				open={this.state.open}
				onClose={this.handleClose}
			>

			<p />

			{options.map((option, i) => 

				(<div id={i}> </div>)
			)}


			</Menu>
		</div> )
	}
}

export default MenuDrop;