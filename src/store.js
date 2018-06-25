
import assign from 'object-assign'


import { createStore } from 'redux'


import reducer from './reducers.js'
//import reducer from 'reducer'

const initialState = {
	isAdmin : false,
	user : {
		'firstname' : '',
		'lastname' : '',
		'lastname' : '',
		'email' : '',
		'password' : '',
		'companyName' : '',
		'logoUrl' : ''
	},
	dashboard : {
		loading: false,
		error: null,
		data: {}
	},
	signup: {
		begin:false,
		error: null
	},
	login: {},


}

const store = createStore(reducer, initialState)

export default store
