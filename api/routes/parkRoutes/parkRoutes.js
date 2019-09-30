const router = require('express').Router()
const parkController = require('./parkService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/parks')
	.get(parkController.index)
	.post(parkController.new)

router.route('/parks/:park_id')
	.get(parkController.view)
	.patch(parkController.update)
	.put(parkController.update)
	.delete(parkController.delete)

module.exports = router