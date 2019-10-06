const mongoose = require('mongoose')

// Setup schema
const serviceSchema = mongoose.Schema({
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
const Service = module.exports = mongoose.model('Service', serviceSchema) 

module.exports.get = function (limit) {
	Service.find().limit(limit)
}