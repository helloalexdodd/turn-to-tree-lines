const mongoose = require('mongoose')

// Setup schema
const serviceSchema = mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	symbol: {
		type: String,
		required: true
	}
})

// Export Contact model
const Service = module.exports = mongoose.model('service', serviceSchema) 

module.exports.get = function (callback, limit) {
	Service.find(callback).limit(limit)
}