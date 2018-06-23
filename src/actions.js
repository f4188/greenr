
import AppDispatcher from 'app-dispatcher.js'

function createAdminAction( ) {

	let action = { actionType : 'CREATE'}
	AppDispatcher.dispatch(action)

}

//name, email, password
function createAccountAction(formData) {

	let action = { actionType : 'CREATE_ACCOUNT', payload : formData }
	AppDispatcher.dispatch(action)

}

function loginAction(formData) {

	let action = { actionType : 'LOGIN', payload : formData }
	AppDispatcher.dispatch(action)

}

function createEventAction(formData) {

	let action = { actionType : 'CREATE_EVENT', payload : formData }
	AppDispatcher.dispatch(action)

}

AppDispatcher.register(function(action) {

	switch(action.actionType) {

		case "CREATE_ACCOUNT" :

			let admin = action.payload.admin
			
			if(admin) {

				
		
			} else {

			}

		break

		case

	}
})