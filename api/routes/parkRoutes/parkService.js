// Import park model
Park = require('./parkModel')

// Handle index actions
exports.index = function (req, res) {
	Park.get(function (err, parks) {
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
	park.name = req.body.name ? req.body.name : park.name
	park.province = req.body.province
	park.location = req.body.location
	park.established = req.body.established
	park.area = req.body.area
	park.region = req.body.region
	park.description = req.body.description
	park.map = req.body.map
	park.thingsToDo = req.body.thingsToDo
	park.campgrounds = req.body.campgrounds

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

		park.name = req.body.name ? req.body.name : park.name
		park.province = req.body.province
		park.location = req.body.location
		park.established = req.body.established
		park.area = req.body.area
		park.region = req.body.region
		park.description = req.body.description
		park.map = req.body.map
		park.thingsToDo = req.body.thingsToDo
		park.campgrounds = req.body.campgrounds

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