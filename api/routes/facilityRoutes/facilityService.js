// Import facility model
const Facility = require('./facilityModel')

// Handle index actions
exports.index = function (req, res) {
	Facility.get(function (err, facilities) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Facilities retrieved successfully",
			data: facilities
		})
	})
}

// Handle create facility actions
exports.new = function (req, res) {
	const facility = new Facility()
	facility.name = req.body.name ? req.body.name : facility.name
	facility.id = req.body.id
	facility.symbol = req.body.symbol
	
	// save the facility and check for errors
	facility.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New facility created!',
			data: facility
		})
	})
}

// Handle view facility info
exports.view = function (req, res) {
	Facility.findById(req.params.facility_id, function (err, facility) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'facility details loading..',
			data: facility
		})
	})
}

// Handle update facility info
exports.update = function (req, res) {
	Facility.findById(req.params.facility_id, function (err, facility) {
		if (err) {
			res.send(err)
			return
		}
		
		facility.name = req.body.name ? req.body.name : facility.name
		facility.id = req.body.id
		facility.symbol = req.body.symbol

		// save the facility and check for errors
		facility.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Facility Info updated',
				data: facility
			})
		})
	})
}

// Handle delete facility
exports.delete = function (req, res) {
	console.log(req.params)
	Facility.remove({
		_id: req.params.facility_id
	}, function (err, facility) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "success",
			message: 'facility deleted'
		})
	})
}