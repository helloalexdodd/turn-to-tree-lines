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
	.get(requireAuth, parkController.view)
	.post(requireAuth, parkController.new)

router.route('/parks/:park_id')
	.get(requireAuth, parkController.view)
	.patch(requireAuth, parkController.update)
	.put(requireAuth, parkController.update)
	.delete(requireAuth, parkController.delete)

module.exports = router