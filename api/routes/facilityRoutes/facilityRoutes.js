const router = require('express').Router()
const facilityController = require('./facilityService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/facilities')
	.get(requireAuth, facilityController.index)
	.post(requireAuth, facilityController.new)

router.route('/facilities/:facility_id')
	.get(requireAuth, facilityController.view)
	.patch(requireAuth, facilityController.update)
	.put(requireAuth, facilityController.update)
	.delete(requireAuth, facilityController.delete)

module.exports = router