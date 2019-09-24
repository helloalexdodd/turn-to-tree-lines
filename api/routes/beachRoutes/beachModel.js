const mongoose = require('mongoose')

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
		type: Array,
		required: true
	}
})

// Export Contact model
const Beach = module.exports = mongoose.model('beach', beachSchema) 

module.exports.get = function (callback, limit) {
	Beach.find(callback).limit(limit)
}