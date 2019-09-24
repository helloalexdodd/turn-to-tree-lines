// Import beach model
Beach = require('./beachModel')

// Handle index actions
exports.index = function (req, res) {
	Beach.get(function (err, beaches) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Beaches retrieved successfully",
			data: beaches
		})
	})
}

// Handle create beach actions
exports.new = function (req, res) {
	const beach = new Beach()
	beach.name = req.body.name ? req.body.name : beach.name
	beach.id = req.body.id
	beach.water = req.body.water
	beach.services = req.body.services

	// save the beach and check for errors
	beach.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New beach created!',
			data: beach
		})
	})
}

// Handle view beach info
exports.view = function (req, res) {
	Beach.findById(req.params.beach_id, function (err, beach) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'beach details loading..',
			data: beach
		})
	})
}

// Handle update beach info
exports.update = function (req, res) {
	Beach.findById(req.params.beach_id, function (err, beach) {
		if (err) {
			res.send(err)
			return
		}
		
		beach.name = req.body.name ? req.body.name : beach.name
		beach.id = req.body.id
		beach.water = req.body.water
		beach.services = req.body.services

		// save the beach and check for errors
		beach.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Beach Info updated',
				data: beach
			})
		})
	})
}

// Handle delete beach
exports.delete = function (req, res) {
	console.log(req.params)
	Beach.remove({
		_id: req.params.beach_id
	}, function (err, beach) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'beach deleted'
		})
	})
}