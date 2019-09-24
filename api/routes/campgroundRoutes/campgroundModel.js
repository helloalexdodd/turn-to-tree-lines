const mongoose = require('mongoose')
const facilities = require('./../facilityRoutes/facilityModel').Schema
const trails = require('./../trailRoutes/trailModel').Schema

// Setup schema
const campgroundSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	campsites: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	facilities: {
		type: Array,
		required: true
	},
	map: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	trails: {
		type: [trails],
		required: true
	},
	facilities: {
		type: [facilities],
		required: true
	}
})

// Export Contact model
const Campground = module.exports = mongoose.model('campground', campgroundSchema) 

module.exports.get = function (callback, limit) {
	Campground.find(callback).limit(limit)
}