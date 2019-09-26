const mongoose = require('mongoose')
const facilitySchema = require('./../facilityRoutes/facilityModel').Schema
const trailSchema = require('./../trailRoutes/trailModel').Schema

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
	notes: {
		type: [String],
		required: false,
		default: [""]
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
		type: [facilitySchema],
		required: false
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
		type: [trailSchema],
		required: false
	}
})

// Export Contact model
const Campground = module.exports = mongoose.model('campground', campgroundSchema) 

module.exports.get = function (callback, limit) {
	Campground.find(callback).limit(limit)
}