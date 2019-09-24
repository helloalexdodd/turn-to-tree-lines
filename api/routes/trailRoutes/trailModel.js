const mongoose = require('mongoose')

// Setup schema
const trailSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
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
		type: string,
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
const Trail = module.exports = mongoose.model('trail', trailSchema) 

module.exports.get = function (callback, limit) {
	Trail.find(callback).limit(limit)
}