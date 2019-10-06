const Park = require('./parkModel')

exports.view = async function (req, res) {
	if (req.params.park_id) {
		const park = await Park.findById(req.params.park_id)
		res.send(park)
		return
	}
	const parks = await Park.get()
	res.send(parks)
}

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

exports.update = function (req, res) {
	Park.findById(req.params.park_id, function (err, park) {
		if (err) {
			res.send(err)
			return
		}
		park.name = req.body.name ? req.body.name : park.name
		park.province = req.body.province ? req.body.province : park.province
		park.location = req.body.location ? req.body.location : park.location
		park.established = req.body.established ? req.body.established : park.established
		park.area = req.body.area ? req.body.area : park.area
		park.region = req.body.region ? req.body.region : park.region
		park.description = req.body.description ? req.body.description : park.description
		park.map = req.body.map ? req.body.map : park.map
		park.thingsToDo = req.body.thingsToDo ? req.body.thingsToDo : park.thingsToDo
		park.campgrounds = req.body.campgrounds ? req.body.campgrounds : park.campgrounds
		park.beaches = req.body.beaches ? req.body.beaches : park.beaches
		park.trails = req.body.trails ? req.body.trails : park.trails

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

exports.delete = function (req, res) {
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