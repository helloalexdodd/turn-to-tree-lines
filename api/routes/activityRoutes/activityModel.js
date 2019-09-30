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

const Activity = module.exports = mongoose.model('activity', activitySchema)

module.exports.get = function (callback, limit) {
	Activity.find(callback).limit(limit)
}
