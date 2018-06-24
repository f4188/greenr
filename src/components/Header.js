import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'

import MenuDrop from './MenuDrop.js'

import { Link } from 'react-router-dom'


const optionsMenuAdmin = [ 
	{
		text: 'Something',
		href: '/',
		as: '/'
	}
]

const optionsMenuUser = []

function Header({ user }) {

	return (

		<AppBar position="static" color="default">
		<Toolbar>
	       	<Grid container direction="row" justify="space-around" alignItems="center">
        		<Grid item sm={6} xs={1} style={{ textAlign: 'left'}}>
        			{!user ? (
        			<Link to='/'>
        			<Avatar />
        			</Link> ) : null}
        		</Grid>
	        </Grid>

	        <Grid item sm={2} xs={2} style={{ textAlign: 'right'}}>
	        	{user && user.isAdmin && !user.isGithubConnected ? (
	        		<a href='/'>
	        			<Button>
	        				Connect Github
	        			</Button>
	        		</a>
	        	) : null}
	        </Grid>
        	<Grid item sm={4} xs={9} style={{ textAlign: 'right' }}>
        		{user ? (
					<div>
						{!user.isAdmin ? (
						    <MenuDrop
						      options={optionsMenuUser}
						      src={user.avatarUrl}
						      alt={user.displayName}
						    />
						) : null}
						{user.isAdmin ? (
						  <MenuDrop
						    options={optionsMenuAdmin}
						    src={user.avatarUrl}
						    alt={user.displayName}
						  />
						) : null}
					</div>
				) : (
				<div>
					<Link to="/login" as="/login">
						<Button>Log in</Button>
					</Link>
					<Link to='/signup'>
						<Button>Sign up</Button>
					</Link>
				</div>
				)}
			</Grid>
		</Toolbar>
		</AppBar>

    )

}


export default Header;