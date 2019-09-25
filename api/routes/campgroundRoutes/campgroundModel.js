const mongoose = require('mongoose')
const facilities = require('./../facilityRoutes/facilityModel').Schema
const trails = require('./../trailRoutes/trailModel').Schema

// Setup schema
const campgroundSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: ""
	},
	campsites: {
		type: Number,
		required: false,
		default: 0
	},
	description: {
		type: String,
		required: false,
		default: ""
	},
	reserveDates: {
		type: String,
		required: false,
		default: ""
	},
	openDates: {
		type: String,
		required: false,
		default: ""
	},
	facilities: {
		type: [facilities],
		required: true,
		default: []
	},
	map: {
		type: String,
		required: true,
		default: ""
	},
	link: {
		type: String,
		required: true,
		default: ""
	},
	trails: {
		type: [trails],
		required: true,
		default: ""
	}
})

// Export Contact model
const Campground = module.exports = mongoose.model('campground', campgroundSchema) 

module.exports.get = function (callback, limit) {
	Campground.find(callback).limit(limit)
}