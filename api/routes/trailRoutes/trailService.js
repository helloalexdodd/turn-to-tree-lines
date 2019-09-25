// Import trail model
const Trail = require('./trailModel')

// Handle index actions
exports.index = function (req, res) {
	Trail.get(function (err, trails) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Trails retrieved successfully",
			data: trails
		})
	})
}

// Handle create trail actions
exports.new = function (req, res) {
	const trail = new Trail()
	trail.name = req.body.name ? req.body.name : trail.name
	trail.id = req.body.id
	trail.description = req.body.description
	trail.length = req.body.length
	trail.loop = req.body.loop
	trail.rating = req.body.rating
	trail.elevation = req.body.elevation
	trail.time = req.body.time
	trail.features = req.body.features
	trail.trailhead = req.body.trailhead
	trail.link = req.body.link

	// save the trail and check for errors
	trail.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New trail created!',
			data: trail
		})
	})
}

// Handle view trail info
exports.view = function (req, res) {
	Trail.findById(req.params.trail_id, function (err, trail) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'Trail details loading..',
			data: trail
		})
	})
}

// Handle update trail info
exports.update = function (req, res) {
	Trail.findById(req.params.trail_id, function (err, trail) {
		if (err) {
			res.send(err)
			return
		}

		trail.name = req.body.name ? req.body.name : trail.name
		trail.id = req.body.id
		trail.description = req.body.description
		trail.length = req.body.length
		trail.loop = req.body.loop
		trail.rating = req.body.rating
		trail.elevation = req.body.elevation
		trail.time = req.body.time
		trail.features = req.body.features
		trail.trailhead = req.body.trailhead
		trail.link = req.body.link

		// save the trail and check for errors
		trail.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Trail Info updated',
				data: trail
			})
		})
	})
}

// Handle delete trail
exports.delete = function (req, res) {
	console.log(req.params)
	Trail.remove({
		_id: req.params.trail_id
	}, function (err, trail) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'Trail deleted'
		})
	})
}