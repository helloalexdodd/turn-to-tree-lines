const mongoose = require('mongoose')

// Setup schema
const featureSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		default: ""
	},
	symbol: {
		type: String,
		required: true,
		default: ""
	}
})

// Export Contact model
const Feature = module.exports = mongoose.model('feature', featureSchema)

module.exports.get = function (callback, limit) {
	Feature.find(callback).limit(limit)
}