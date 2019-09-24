const mongoose = require('mongoose')
const services = require('./../serviceRoutes/serviceModel').Schema

// Setup schema
const beachSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	water: {
		type: Array,
		required: true
	},
	services: {
		type: [services],
		required: true
	}
})

// Export Contact model
const Beach = module.exports = mongoose.model('beach', beachSchema) 

module.exports.get = function (callback, limit) {
	Beach.find(callback).limit(limit)
}