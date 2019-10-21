const express = require('express')
const router = express.Router()
const userService = require('./userServices')
const tokenService = require('../utils/tokenService')

router
	.route('/signup')
	.post(async (req, res, next) => {
		try {
			const user = await userService.createUser(req.body);
			res.status(201).json({
				data: [user]
			});
		} catch (e) {
			next(e);
		}
	})

router
	.route('/login')
	.post(async (req, res, next) => {
		try {
			const user = await userService.isUser(req.body);
			// we could reduce indentation here by reversing the logic:
			if (!user) {
				next();
			}
			
			const token = await tokenService.issueToken(user);
			res.status(200).json({
				data: {
					token
				}
			})
		} catch (e) {
			next(e);
		}
	})

module.exports = { router }