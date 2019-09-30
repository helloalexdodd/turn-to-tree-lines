const router = require('express').Router()
const featureController = require('./featureService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/features')
	.get(requireAuth, featureController.index)
	.post(requireAuth, featureController.new)

router.route('/features/:feature_id')
	.get(requireAuth, featureController.view)
	.patch(requireAuth, featureController.update)
	.put(requireAuth, featureController.update)
	.delete(requireAuth, featureController.delete)

module.exports = router