const router = require('express').Router()
const trailController = require('./trailService')
const requireAuth = require('./../../middleware/auth')

router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

router.route('/trails')
	.get(requireAuth, trailController.index)
	.post(requireAuth, trailController.new)

router.route('/trails/:trail_id')
	.get(requireAuth, trailController.view)
	.patch(requireAuth, trailController.update)
	.put(requireAuth, trailController.update)
	.delete(requireAuth, trailController.delete)

module.exports = router