const mongoose = require('mongoose')

// Setup schema
const facilitySchema = mongoose.Schema({
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
const Facility = module.exports = mongoose.model('facility', facilitySchema) 

module.exports.get = function (callback, limit) {
	Facility.find(callback).limit(limit)
}