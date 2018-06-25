
import { combineReducers } from 'redux'

import {
	NEW_EVENT_BEGIN,
	NEW_EVENT_SUCCESS,
	NEW_EVENT_FAILURE
} from './actions.js'

import {
	FETCH_USERDATA_BEGIN,
	FETCH_USERDATA_SUCCESS,
	FETCH_USERDATA_FAILURE
} from './actions.js'

import {
	SIGNUP_BEGIN,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE
} from './actions.js'

import {
	LOGIN_BEGIN,
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from './actions.js'

function signupReducer(state = null, action) {

	switch(action.type) {
		case SIGNUP_BEGIN:
			return {
				...state,

			}
		break;
		case SIGNUP_SUCCESS:
			return {
				...state,

			}
		break;
		case SIGNUP_FAILURE:
			return {
				...state

			}
		break;
		default:
			return state
	}

}



function loginReducer(state = null, action) {

	switch(action.type) {
		case LOGIN_BEGIN:
			return {
				...state,
			}
		break;
		case LOGIN_SUCCESS:
			return {
				...state,
			}
		break;
		case LOGIN_FAILURE:
			return {
				...state,
			}
		break;
		default:
			return state;
	}
}



export default combineReducers({ login: loginReducer, signup: signupReducer})

//export default reducer

