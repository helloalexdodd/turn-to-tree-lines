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
		required: true,
		default: ""
	},
	symbol: {
		type: String,
		required: false,
		default: ""
	}
})

// Export Contact model
const Facility = module.exports = mongoose.model('facility', facilitySchema) 

module.exports.get = function (callback, limit) {
	Facility.find(callback).limit(limit)
}