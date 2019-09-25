const mongoose = require('mongoose')
const activities = require('./../activityRoutes/activityModel').Schema
const campgrounds = require('./../campgroundRoutes/campgroundModel').Schema
const beaches = require('./../beachRoutes/beachModel').Schema
const trails = require('./../trailRoutes/trailModel').Schema

// Setup schema
const parkSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	province: {
		type: String,
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
		],
		required: true
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
		type: [activities],
		required: false
	},
	campgrounds: {
		type: [campgrounds],
		required: false
	},
	beaches: {
		type: [beaches],
		required: false
	},
	trails: {
		type: [trails],
		required: false
	}
})

// Export Contact model
const Park = module.exports = mongoose.model('park', parkSchema) 

module.exports.get = function (callback, limit) {
	Park.find(callback).limit(limit)
}