const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
const apiRoutes = require("./api/routes/parkRoutes/parkRoutes")
const { applyMiddleware } = require('./api/utils')
const middleWare = require('./api/middleware')
const { router: userRoutes } = require('./api/users/userRoutes');
const { URL, PORT } = require('./api/utils/constants')

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}))

applyMiddleware(middleWare, app)

app.use(bodyParser.json())

app.use('/api/users', userRoutes);

const server = http.createServer(app)

// Connect to Mongoose and set connection variable
mongoose.connect(URL, { useNewUrlParser: true })
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Running on port ${PORT}`)
		})
	})
	.catch((err) => console.log(err))

const db = mongoose.connection

// Added check for DB connection
if (!db) {
	console.log("Error connecting db")
} else {
	console.log("Db connected successfully")
}

// Send message for default URL
app.get('/', (req, res) => res.send('You got the API!'))

// Use Api routes in the App
app.use('/api', apiRoutes)