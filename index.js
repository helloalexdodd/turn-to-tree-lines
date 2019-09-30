const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')
const mongoose = require('mongoose')
const app = express()
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
app.get('/', (req, res) => res.send("A successful call! Read the documentation to learn which endpoints you can hit for the specific information you're looking for."))

// links to all routes
const activityRoutes = require("./api/routes/activityRoutes/activityRoutes")
const beachRoutes = require("./api/routes/beachRoutes/beachRoutes")
const campgroundRoutes = require("./api/routes/campgroundRoutes/campgroundRoutes")
const facilityRoutes = require("./api/routes/facilityRoutes/facilityRoutes")
const parkRoutes = require("./api/routes/parkRoutes/parkRoutes")
const serviceRoutes = require("./api/routes/serviceRoutes/serviceRoutes")
const trailRoutes = require("./api/routes/trailRoutes/trailRoutes")
const featureRoutes = require("./api/routes/featureRoutes/featureRoutes")

// Use Api routes in the App
app.use('/api', activityRoutes)
app.use('/api', beachRoutes)
app.use('/api', campgroundRoutes)
app.use('/api', facilityRoutes)
app.use('/api', parkRoutes)
app.use('/api', serviceRoutes)
app.use('/api', trailRoutes)
app.use('/api', featureRoutes)
