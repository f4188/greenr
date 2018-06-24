
import React from 'react'
import Header from '../components/Header.js'
 
export default function WithHeader(BaseComponent, { noHeader = false } = {} ) {
	
	return class App extends React.Component {

		render() {
			return (

				<div>
					{noHeader ? null : <Header {...this.props} />}
					<BaseComponent {...this.props} />
					
				</div>
			)

		}

	}


}