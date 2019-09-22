const mongoose = require('mongoose')

// Setup schema
const parkSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	province: {
		type: String,
		required: true,
		enum: [
			"Alberta",
			"British Columbia",
			"Manitoba",
			"New Brunswick",
			"Newfoundland and Labrador",
			"Northwest Territories",
			"Nova Scotia",
			"Nunavut",
			"Ontario",
			"Prince Edward Island",
			"Quebec",
			"Saskatchewan",
			"Yukon"
		]
	},
	location: {
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	},
	established: {
		type: Number,
		required: true
	},
	area: {
		type: Number,
		required: true
	},
	region: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	map: {
		type: String,
		required: true
	},
	thingsToDo: {
		type: Array,
		required: false
	},
	campgrounds: {
		type: Array,
		required: false
	}
})

// Export Contact model
const Park = module.exports = mongoose.model('park', parkSchema) 

module.exports.get = function (callback, limit) {
	Park.find(callback).limit(limit)
}