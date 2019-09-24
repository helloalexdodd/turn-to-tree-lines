// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import campground controller
const campgroundController = require('./campgroundService')

// campground routes
router.route('/campgrounds')
	.get(campgroundController.index)
	.post(campgroundController.new)

router.route('/campgrounds/:campground_id')
	.get(campgroundController.view)
	.patch(campgroundController.update)
	.put(campgroundController.update)
	.delete(campgroundController.delete)

// Export API routes
module.exports = router