const mongoose = require('mongoose')

// Setup schema
const trailSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	length: {
		type: Number,
		required: true
	},
	loop: {
		type: Boolean,
		required: true
	},
	rating: {
		type: String,
		required: true
	},
	elevation: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	features: {
		type: String,
		required: true
	},
	trailhead: {
		// If we have an enum with only one option, maybe a boolean makes more sense?
		// ex. isPoint: true/false
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
	link: {
		type: String,
		required: true
	}
})

// Export Contact model
const Trail = module.exports = mongoose.model('Trail', trailSchema) 

module.exports.get = function (limit) {
	Trail.find().limit(limit)
}