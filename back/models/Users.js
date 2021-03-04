const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
  hate: {
		type: String,
		require: true
	},
	date: {
		type: Date,
		default: Date.now()
	}
})

mongoose.model('Users', Users)