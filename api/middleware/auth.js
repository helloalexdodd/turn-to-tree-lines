const tokenService = require('../utils/tokenService');

module.exports = async (req, res, next) => {
	const headers = req.body.headers
	if (!headers) {
		// by adding a return here, we can remove the need for an "else" and improve readability
		return next(new Error('invalid request'))
	} 

	const authHeader = req.body.headers['Authorization'];

	if (!authHeader) {
		return next(new Error('invalid request'));
	} 

	try {
		const [prefix, token] = authHeader.split(' ');
		const decoded = await tokenService.verifyToken(token);
		if (decoded) {
			req.token = decoded;
			return next();
		} 

		return next(new Error('invalid request'));
	} catch (e) {
		console.error(e);
	}
}