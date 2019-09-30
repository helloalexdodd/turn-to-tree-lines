// Import feature model
const Feature = require('./featureModel')

// Handle index actions
exports.index = function (req, res) {
	Feature.get(function (err, features) {
		if (err) {
			res.json({
				status: "error",
				message: err,
			})
		}
		res.json({
			status: "success",
			message: "Features retrieved successfully",
			data: features
		})
	})
}

// Handle create feature actions
exports.new = function (req, res) {
	const feature = new Feature()
	feature.name = req.body.name
	feature.symbol = req.body.symbol

	// save the feature and check for errors
	feature.save(function (err) {
		if (err) {
			res.json(err)
			return
		}
		res.json({
			message: 'New feature created!',
			data: feature
		})
	})
}

// Handle view feature info
exports.view = function (req, res) {
	Feature.findById(req.params.feature_id, function (err, feature) {
		if (err) {
			res.send(err)
			return
		}
		res.json({
			message: 'feature details loading..',
			data: feature
		})
	})
}

// Handle update feature info
exports.update = function (req, res) {
	Feature.findById(req.params.feature_id, function (err, feature) {
		if (err) {
			res.send(err)
			return
		}
		
		feature.name = req.body.name ? req.body.name : feature.name
		feature.symbol = req.body.symbol ? req.body.symbol : feature.symbol
		
		// save the feature and check for errors
		feature.save(function (err) {
			if (err) {
				res.json(err)
				return
			}
			res.json({
				message: 'Feature Info updated',
				data: feature
			})
		})
	})
}

// Handle delete feature
exports.delete = function (req, res) {
	Feature.remove({
		_id: req.params.feature_id
	}, function (err, feature) {
		if (err) {
			res.send(err)
		}	
		res.json({
			status: "Success!",
			message: `${feature} deleted`
		})
	})
}