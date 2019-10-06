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
const Feature = module.exports = mongoose.model('Feature', featureSchema)

module.exports.get = function (limit) {
	Feature.find().limit(limit)
}