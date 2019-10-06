const mongoose = require('mongoose')

const activitySchema = mongoose.Schema({
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

const Activity = module.exports = mongoose.model('Activity', activitySchema)

module.exports.get = function (limit) {
	Activity.find().limit(limit)
}
