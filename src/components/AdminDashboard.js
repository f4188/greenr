import React from 'react'
import { Link } from 'react-router-dom'


//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'

export default class DashboardPage extends React.Component {

	componentDidMount(nextProps) {

      // 	this.fetchData()

    }
	
    render() {

    	return (
	    	<div>
	    		<Drawer variant="permanent" ancher="left">
	    			<MenuItem>
	    				<List>
	    				</List>
	    				<Divider/>
	    				<List>
	    					{['Menu item 1', 'Menu item 2']}
	    				</List>
	    			</MenuItem>
	    		</Drawer>

	    		<main>

	    		</main>
	    	</div>
    	)

    }

}