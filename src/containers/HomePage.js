
import React from 'react'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Link } from 'react-router-dom'

class HomePage extends React.Component {
	
	componentDidMount() {


	}

	render() {
		return (
			<div>
			<Grid>
            <Grid sm={12} xs={12} style={{ textAlign : 'center'}}>
              <br />
              <h1> greenr </h1>

              <p>
                An app that does something
              </p>

              <p style={{ textAlign: 'center'}}>
              <Link to='/signup'>
                <Button >
                  Sign up
                </Button>
              </Link>

              <Link to='/login'>
                <Button variant="raised" color="secondary">
                  Log in
                </Button>
              </Link>
            </p>


           <iframe title="github" src="https://ghbtns.com/github-btn.html?user=f4188&repo=greenr&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>

            </Grid>
          </Grid>
          </div>
		)
	}

}

export default HomePage