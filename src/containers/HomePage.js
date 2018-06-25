
import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Paper from '@material-ui/core/Paper'

import GetStartedButton from '../components/GetStartedButton.js'

import { Link } from 'react-router-dom'

class HomePage extends React.Component {
	
	componentDidMount() {


	}

	render() {
		return (
			<div>

			<Grid container direction="column">
	        <Grid container direction="column" xs={12} alignItems="center" >
	            	
	            	<Grid item xs={6}  style={{ textAlign : 'center', paddingTop : 40, paddingBottom : 40}}>
		              <Typography variant="display1"> Towared a greenr future </Typography>
		            </Grid>

		            <Grid item xs={6}  style={{ textAlign : 'left', paddingBottom : 40}}>
		              <Typography>
		                Greenr is a platform that allows the companies to encourage its employees to work on events that help the environment.
						The employees can signup and create sustainable events using this platform. Greenr allows the user to know about the
						Global impact created by them and also encourages by rewarding them with points which they can redeem.
		              </Typography>
		            </Grid>

		            <Grid item xs={6}  style={{ textAlign : 'center', paddingTop : 30, paddingBottom : 30}}>	              	
			            
			            <span style={{ padding : 10}}>
		            		<Button variant="raised"> Join a company channel </Button>
		            	</span>
		            	<span style={{ padding : 10}}>
				        	<Button variant="raised"> Create a company channel </Button>
				        </span>
		          	            
			        </Grid>

		    </Grid>

	        <Grid container direction="column" xs={12} alignItems="center" justify="left">
		        
		        
		        <Grid item xs={6} style={{ padding: 20}}>
	            <Typography variant="headline"> How it works </Typography>
	            </Grid>

	            <Grid item xs={6} style={{ padding: 20}}>
	            <Typography variant="title"> 1. Register </Typography>
	            <Typography variant="body1"> The company and its employees register into the Greenr platform </Typography>
	            </Grid>

	            <Grid item xs={6} style={{ padding: 20}}>
	            <Typography variant="title"> 2. Create Sustainable Events </Typography>      
	            <Typography variant="body1"> Company admin selects from the given set of events or creates new events </Typography>
	            </Grid>

	            <Grid item xs={6} style={{ padding: 20}}>
	            <Typography variant="title"> 3. Signup for the event </Typography>
	            <Typography variant="body1"> The employees signup for the event that they are interested in. </Typography>
	            </Grid>

	            <Grid item xs={6} style={{ padding: 20}}>
	            	<Typography variant="title"> 4. Get Rewards! </Typography>
	            	<Typography variant="body1"> The user can know how much economic impact they ahve made and also they can redeem the points that they earn by participating in the events. </Typography>
		             <Link to='/login'>
		                <GetStartedButton />
		            </Link>
		        </Grid>

	            <Grid item xs={6}>
	           <iframe title="github" src="https://ghbtns.com/github-btn.html?user=f4188&repo=greenr&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
	           </Grid>

            </Grid>
            </Grid>
        </div>
		)
	}

}

export default HomePage