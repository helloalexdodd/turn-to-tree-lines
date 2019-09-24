// Import service model
Service = require('./serviceModel')

// Handle index actions
exports.index = function (req, res) {
	Service.get(function (err, services) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Services retrieved successfully",
			data: services
		})
	})
}

// Handle create service actions
exports.new = function (req, res) {
	const service = new Service()
	service.name = req.body.name ? req.body.name : service.name
	service.id = req.body.id
	service.symbol = req.body.symbol

	// save the service and check for errors
	service.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New service created!',
			data: service
		})
	})
}

// Handle view service info
exports.view = function (req, res) {
	Service.findById(req.params.service_id, function (err, service) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'Service details loading..',
			data: service
		})
	})
}

// Handle update service info
exports.update = function (req, res) {
	Service.findById(req.params.service_id, function (err, service) {
		if (err) {
			res.send(err)
			return
		}
		
		service.name = req.body.name ? req.body.name : service.name
		service.id = req.body.id
		service.symbol = req.body.symbol

		// save the service and check for errors
		service.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Service Info updated',
				data: service
			})
		})
	})
}

// Handle delete service
exports.delete = function (req, res) {
	console.log(req.params)
	Service.remove({
		_id: req.params.service_id
	}, function (err, service) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'service deleted'
		})
	})
}