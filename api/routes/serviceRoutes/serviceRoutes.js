// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import service controller
const serviceController = require('./serviceService')

// service routes
router.route('/services')
	.get(serviceController.index)
	.post(serviceController.new)

router.route('/services/:service_id')
	.get(serviceController.view)
	.patch(serviceController.update)
	.put(serviceController.update)
	.delete(serviceController.delete)

// Export API routes
module.exports = router