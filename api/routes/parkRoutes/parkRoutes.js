// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import park controller
const parkController = require('./parkService')

// Park routes
router.route('/parks')
	.get(parkController.index)
	.post(parkController.new)

router.route('/parks/:park_id')
	.get(parkController.view)
	.patch(parkController.update)
	.put(parkController.update)
	.delete(parkController.delete)

// Export API routes
module.exports = router