const mongoose = require('mongoose')
const serviceSchema = require('./../serviceRoutes/serviceModel').Schema

// Setup schema
const beachSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	water: {
		type: Array,
		required: true
	},
	services: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: serviceSchema
	}]
})

// Export Contact model
const Beach = module.exports = mongoose.model('beach', beachSchema) 

module.exports.get = function (callback, limit) {
	Beach
		.find(callback)
		.limit(limit)
		// .populate('service')
		// .exec()
}