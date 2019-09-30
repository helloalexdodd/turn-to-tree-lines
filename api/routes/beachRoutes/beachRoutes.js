const router = require('express').Router()
const beachController = require('./beachService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/beaches')
	.get(requireAuth, beachController.index)
	.post(requireAuth, beachController.new)

router.route('/beaches/:beach_id')
	.get(requireAuth, beachController.view)
	.patch(requireAuth, beachController.update)
	.put(requireAuth, beachController.update)
	.delete(requireAuth, beachController.delete)

module.exports = router