
//import AppDispatcher from 'app-dispatcher.js'


function createForm() {}

//name, email, password
const signup = (formData) => ({

	actionType : 'CREATE_ACCOUNT',
	 payload : formData
	//AppDispatcher.dispatch(action)

})

//const login = (formData) => ({
//	type : 'LOGIN', 
//	payload : formData
//})




const createEvent = (formData) => ({
	type : 'CREATE_EVENT', 
	payload : formData
})




export const SIGNUP_BEGIN = 'SIGNUP_BEGIN'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signupBegin = (signupInfo) => ({

})

export const signupSuccess = () => ({})
export const signupFailure = () => ({})




export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginBegin = (loginInfo) => ({
	type: LOGIN_BEGIN,
	payload: {}
})

export const loginSuccess = () => ({})
export const loginFailure = () => ({})