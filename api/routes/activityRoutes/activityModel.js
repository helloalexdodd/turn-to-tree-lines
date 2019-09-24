const mongoose = require('mongoose')

// Setup schema
const activitySchema = mongoose.Schema({
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
const Activity = module.exports = mongoose.model('activity', activitySchema)

module.exports.get = function (callback, limit) {
	Activity.find(callback).limit(limit)
}