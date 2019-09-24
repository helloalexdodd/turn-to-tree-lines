// Initialize express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'Its Working',
		message: 'Wow!'
	})
})

// Import beach controller
const beachController = require('./beachService')

// beach routes
router.route('/beachs')
	.get(beachController.index)
	.post(beachController.new)

router.route('/beachs/:beach_id')
	.get(beachController.view)
	.patch(beachController.update)
	.put(beachController.update)
	.delete(beachController.delete)

// Export API routes
module.exports = router