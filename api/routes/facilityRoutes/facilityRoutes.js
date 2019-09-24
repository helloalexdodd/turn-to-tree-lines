// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import facility controller
const facilityController = require('./facilityService')

// facility routes
router.route('/facilities')
	.get(facilityController.index)
	.post(facilityController.new)

router.route('/facilities/:facility_id')
	.get(facilityController.view)
	.patch(facilityController.update)
	.put(facilityController.update)
	.delete(facilityController.delete)

// Export API routes
module.exports = router