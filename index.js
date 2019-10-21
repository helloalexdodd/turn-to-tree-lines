const express = require('express')
const app = express()
const http = require('http')

const mongoose = require('mongoose')
const db = mongoose.connection

const bodyParser = require('body-parser')

const { applyMiddleware } = require('./api/utils')
const middleWare = require('./api/middleware')

const { router: userRoutes } = require('./api/users/userRoutes');
const { URL, PORT } = require('./api/utils/constants')

// Configure bodyParser to handle post requests
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use(bodyParser.json())

applyMiddleware(middleWare, app)

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

// Added check for DB connection
// This will actually always resolve to the "Else" path, it will never not exist
// The mongoose.connection property is always a connection object, and is therefore always truthy
// (even if you haven't connected yet!) you'd want to handle this logic in the .then/catch above
if (!db) {
	console.log('Error connecting db')
} else {
	console.log('Db connected successfully')
}

// Send message for default URL
app.get('/', (req, res) => res.send("A successful call! Read the documentation to learn which endpoints you can hit for the specific information you're looking for."))

// links to all routes
// In general, you should always put all your imports/requires at the top of a file as a best practice
const activityRoutes = require('./api/routes/activityRoutes/activityRoutes')
const beachRoutes = require('./api/routes/beachRoutes/beachRoutes')
const campgroundRoutes = require('./api/routes/campgroundRoutes/campgroundRoutes')
const facilityRoutes = require('./api/routes/facilityRoutes/facilityRoutes')
const parkRoutes = require('./api/routes/parkRoutes/parkRoutes')
const serviceRoutes = require('./api/routes/serviceRoutes/serviceRoutes')
const trailRoutes = require('./api/routes/trailRoutes/trailRoutes')
const featureRoutes = require('./api/routes/featureRoutes/featureRoutes')

// Use Api routes in the App
// Very organized and clean, love it!
app.use('/api', activityRoutes)
app.use('/api', beachRoutes)
app.use('/api', campgroundRoutes)
app.use('/api', facilityRoutes)
app.use('/api', parkRoutes)
app.use('/api', serviceRoutes)
app.use('/api', trailRoutes)
app.use('/api', featureRoutes)
