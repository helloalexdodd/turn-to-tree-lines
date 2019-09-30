const router = require('express').Router()
const campgroundController = require('./campgroundService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/campgrounds')
	.get(requireAuth, campgroundController.index)
	.post(requireAuth, campgroundController.new)

router.route('/campgrounds/:campground_id')
	.get(requireAuth, campgroundController.view)
	.patch(requireAuth, campgroundController.update)
	.put(requireAuth, campgroundController.update)
	.delete(requireAuth, campgroundController.delete)

module.exports = router