// Import campground model
const Campground = require('./campgroundModel')

// Handle index actions
exports.index = function (req, res) {
	Campground.get(function (err, campgrounds) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Campgrounds retrieved successfully",
			data: campgrounds
		})
	})
}

// Handle create campground actions
exports.new = function (req, res) {
	const campground = new Campground()
	campground.name = req.body.name ? req.body.name : campground.name
	campground.id = req.body.id
	campground.campsites = req.body.campsites
	campground.description = req.body.description
	campground.facilities = req.body.facilities
	campground.map = req.body.map
	campground.link = req.body.link
	campground.trails = req.body.trails
	campground.thingsToDo = req.body.facilities

	// save the campground and check for errors
	campground.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New campground created!',
			data: campground
		})
	})
}

// Handle view campground info
exports.view = function (req, res) {
	Campground.findById(req.params.campground_id, function (err, campground) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'campground details loading..',
			data: campground
		})
	})
}

// Handle update campground info
exports.update = function (req, res) {
	Campground.findById(req.params.campground_id, function (err, campground) {
		if (err) {
			res.send(err)
			return
		}
		campground.name = req.body.name ? req.body.name : campground.name
		campground.id = req.body.id
		campground.campsites = req.body.campsites
		campground.description = req.body.description
		campground.facilities = req.body.facilities
		campground.map = req.body.map
		campground.link = req.body.link
		campground.trails = req.body.trails
		campground.thingsToDo = req.body.facilities

		// save the campground and check for errors
		campground.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'campground Info updated',
				data: campground
			})
		})
	})
}

// Handle delete campground
exports.delete = function (req, res) {
	console.log(req.params)
	Campground.remove({
		_id: req.params.campground_id
	}, function (err, campground) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'campground deleted'
		})
	})
}