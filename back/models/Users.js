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
	friends: [
		{
			name: { type: String },
			hate:  { type: String },
			voted:  { type: Boolean },
			votes: {
				heart:  { type: Number },
				heartbroken: { type: Number },
				fire: { type: Number },
				horse: { type: Number },
				eye: { type: Number },
				poo: { type: Number },
				frown: { type: Number },
				bomb: { type: Number },
			},
		}
	],
	date: {
		type: Date,
		default: Date.now()
	}
})

mongoose.model('Users', Users)