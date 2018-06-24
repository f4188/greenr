import React from 'react'
import { connect } from 'react-redux'

import AdminDashboard from '../components/AdminDashboard.js'

import store from '../store.js'



class DashboardPage extends React.Component {
	
	componentDidMount() {
		this.props.loadDashboard()
	}

	render() {

		const { error, loading, data } = this.props

		return  (

			<AdminDashboard/>
		)

	}

}

const mapStateToProps = state => ({
	return {
		error: state.dashboard.error,
		loading: state.dashboard.loading,
		data: state.dashboard.data
	}
})

const mapDispatchToProps = dispatch => {
	return {
		'loadDashboard': () =>
			dispatch({
				type: ''
			})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)