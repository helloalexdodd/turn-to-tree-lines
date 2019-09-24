// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import trail controller
const trailController = require('./trailService')

// trail routes
router.route('/trails')
	.get(trailController.index)
	.post(trailController.new)

router.route('/trails/:trail_id')
	.get(trailController.view)
	.patch(trailController.update)
	.put(trailController.update)
	.delete(trailController.delete)

// Export API routes
module.exports = router