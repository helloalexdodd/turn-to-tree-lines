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
		ref: 'Service'
	}]
})

// Export Contact model
const Beach = module.exports = mongoose.model('Beach', beachSchema) 

module.exports.get = function (limit) {
	return Beach
		.find()
		.limit(limit)
		.populate('service')
		.exec()
}