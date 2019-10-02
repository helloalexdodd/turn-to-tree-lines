const mongoose = require('mongoose')
const facilitySchema = require('../facilityRoutes/facilityModel').Schema
const trailSchema = require('../trailRoutes/trailModel').Schema

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
	facilities: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: facilitySchema
	}],
	map: {
		type: String,
		required: false,
		default: ""
	},
	link: {
		type: String,
		required: false,
		default: ""
	},
	trails: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: trailSchema
	}]
})

// Export Contact model
const Campground = module.exports = mongoose.model('campground', campgroundSchema) 

module.exports.get = function (callback, limit) {
	Campground.find(callback).limit(limit)
}