
import AppDispatcher from 'app-dispatcher.js'
import { EventEmitter } from 'events'
import assign from 'object-assign'

let store =  assign({}, EventEmitter.prototype, {
	
	emitChange : function() {

		this.emit('change')

	},

	addChangeListener: function(callback) {

		this.on('change', callback)

	},

	removeChangeListener: function(callback) {

		this.removeListener('change', callback)

	}

})

let client = assign({}, store.prototype, {

	admin : false,
	info : {
		name : "",
		companyName : "",
		location : "",

	},
	events : {},
	employees : {}

})

AppDispatcher.register(function(action) {

	switch(action.actionType) {

		case "" : 

		break;
	}

})

export { client }