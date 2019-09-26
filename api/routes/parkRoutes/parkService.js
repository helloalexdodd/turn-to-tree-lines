// Import park model
const Park = require('./parkModel')
// Import activities model
const activities = require('./../activityRoutes/activityModel')

// Handle index actions
exports.index = function (req, res) {
	Park.get(function (err, parks) {
		console.log(activities)
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Parks retrieved successfully",
			data: parks
		})
	})
}

// Handle create park actions
exports.new = function (req, res) {
	const park = new Park()
	park.name = req.body.name
	park.province = req.body.province
	park.location = req.body.location
	park.established = req.body.established
	park.area = req.body.area
	park.region = req.body.region
	park.description = req.body.description
	park.map = req.body.map


	// save the park and check for errors
	park.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New park created!',
			data: park
		})
	})
}

// Handle view park info
exports.view = function (req, res) {
	Park.findById(req.params.park_id, function (err, park) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'Park details loading..',
			data: park
		})
	})
}

// Handle update park info
exports.update = function (req, res) {
	Park.findById(req.params.park_id, function (err, park) {
		if (err) {
			res.send(err)
			return
		}
		console.log(activities)
		park.name = req.body.name ? req.body.name : park.name
		park.province = req.body.province ? req.body.province : park.province
		park.location = req.body.location ? req.body.location : park.location
		park.established = req.body.established ? req.body.established : park.established
		park.area = req.body.area ? req.body.area : park.area
		park.region = req.body.region ? req.body.region : park.region
		park.description = req.body.description ? req.body.description : park.description
		park.map = req.body.map ? req.body.map : park.map
		

		// save the park and check for errors
		park.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Park Info updated',
				data: park
			})
		})
	})
}

// Handle delete park
exports.delete = function (req, res) {
	console.log(req.params)
	Park.remove({
		_id: req.params.park_id
	}, function (err, park) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'Park deleted'
		})
	})
}