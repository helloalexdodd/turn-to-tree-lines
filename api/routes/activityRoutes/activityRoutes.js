const router = require('express').Router()
const activityController = require('./activityService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/activities')
	.get(requireAuth, activityController.index)
	.post(requireAuth, activityController.new)

router.route('/activities/:activity_id')
	.get(requireAuth, activityController.view)
	.patch(requireAuth, activityController.update)
	.put(requireAuth, activityController.update)
	.delete(requireAuth, activityController.delete)

module.exports = router