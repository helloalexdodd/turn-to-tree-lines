// Import activity model
const Activity = require('./activityModel')

// Handle index actions
exports.index = function (req, res) {
	Activity.get(function (err, activities) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Activities retrieved successfully",
			data: activities
		})
	})
}

// Handle create activity actions
exports.new = function (req, res) {
	const activity = new Activity()
	activity.name = req.body.name
	activity.symbol = req.body.symbol

	// save the activity and check for errors
	activity.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New activity created!',
			data: activity
		})
	})
}

// Handle view activity info
exports.view = function (req, res) {
	Activity.findById(req.params.activity_id, function (err, activity) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'activity details loading..',
			data: activity
		})
	})
}

// Handle update activity info
exports.update = function (req, res) {
	Activity.findById(req.params.activity_id, function (err, activity) {
		if (err) {
			res.send(err)
			return
		}
		activity.name = req.body.name ? req.body.name : activity.name
		activity.symbol = req.body.symbol ? req.body.symbol : activity.symbol
		
		// save the activity and check for errors
		activity.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Activity Info updated',
				data: activity
			})
		})
	})
}

// Handle delete activity
exports.delete = function (req, res) {
	console.log(req.params)
	Activity.remove({
		_id: req.params.activity_id
	}, function (err, activity) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'Activity deleted'
		})
	})
}