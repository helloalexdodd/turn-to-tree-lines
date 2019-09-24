// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import activity controller
const activityController = require('./activityService')

// activity routes
router.route('/activities')
	.get(activityController.index)
	.post(activityController.new)

router.route('/activities/:activity_id')
	.get(activityController.view)
	.patch(activityController.update)
	.put(activityController.update)
	.delete(activityController.delete)

// Export API routes
module.exports = router