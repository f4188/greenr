
//import AppDispatcher from 'app-dispatcher.js'

export const FETCH_USERDATA_BEGIN = 'FETCH_USERDATA_BEGIN'
export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS'
export const FETCH_USERDATA_END = 'FETCH_USERDATA_END'

export const NEW_EVENT_BEGIN = 'NEW_EVENT_BEGIN'
export const NEW_EVENT_SUCCESS = 'NEW_EVENT_SUCCESS'
export const NEW_EVENT_FAILURE = 'NEW_EVENT_FAILURE'

const newEventBegin = () => ({ type : NEW_EVENT_BEGIN })
const newEventSuccess = () => ({ type: NEW_EVENT_SUCCESS })
const newEventFailure = () => ({ type: NEW_EVENT_FAILURE })

export const SIGNUP_BEGIN = 'SIGNUP_BEGIN'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const signupBegin = () => ({ type: SIGNUP_BEGIN })
export const signupSuccess = () => ({ type: SIGNUP_SUCCESS })
export const signupFailure = () => ({ type: SIGNUP_FAILURE })

export const LOGIN_BEGIN = 'LOGIN_BEGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const loginBegin = (loginInfo) => ({type: LOGIN_BEGIN })

export const loginSuccess = () => ({})
export const loginFailure = () => ({})