const mongoose = require('mongoose')

// Setup schema
const facilitySchema = mongoose.Schema({
	name: {
		type: String,
		enum: [
			"Electricity",
			"Water and sewage",
			"Flush toilet",
			"Dry toilet",
			"Shower",
			"Sewage disposal",
			"Fire pits",
			"Interpretive program",
			"Accessible"
		],
		required: true
	},
	symbol: {
		type: String,
		required: false
	}
})

// Export Contact model
const Facility = module.exports = mongoose.model('Facility', facilitySchema) 

module.exports.get = function (limit) {
	Facility.find().limit(limit)
}