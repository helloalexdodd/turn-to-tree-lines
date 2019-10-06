const mongoose = require('mongoose')
// const activitySchema = require('./../activityRoutes/activityModel').Schema
// const campgroundSchema = require('./../campgroundRoutes/campgroundModel').Schema
// const beachSchema = require('./../beachRoutes/beachModel').Schema
// const trailSchema = require('./../trailRoutes/trailModel').Schema

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
	thingsToDo: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Activity'
	}],
	campgrounds: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Campground'
	}],
	beaches: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Beach'
	}],
	trails: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Trail'
	}]
})

// Export Contact model
const Park = module.exports = mongoose.model('Park', parkSchema) 

module.exports.get = function(limit) {
	return Park
		.find()
		.limit(limit)
		.populate('thingsToDo campgrounds beaches trails')
		.exec()
}

module.exports.view = function() {
console.log(Park)
	return Park
		.find()
		.populate('thingsToDo')
		.exec()
}