// Require dotenv to setup environment variables in our server
require('dotenv').config()

// Load express
const express = require('express')

// Setup our Express app
const app = express()

const PORT = 8085 

// Load the connectDB function
const connectDB = require('./config/database')

// Connect to database
connectDB()

// Load our flight data 
const flights = require('./models/FlightModel')

// Load our flightroutes
const flightRoutes = require('./routes/flightRoutes')

// Load the create engine -> (npm install jsx-view-engine react react-dom)
const { createEngine } = require('jsx-view-engine')

// Load the method-override middleware
const methodOverride = require('method-override')

// Configure the view engine and look for files ending in jsx
app.set('view engine', 'jsx')

// Create the engine and accept files ending in jsx
app.engine('jsx', createEngine())

// a middleware that formats the form data (currently a string that looks like query params) into a object we can use
app.use(express.urlencoded({ extended: true }))

// hack into our form and give it more HTTP methods (like DELETE and PUT)
app.use(methodOverride('_method'))

// look for static files (like css) in the public folder
app.use(express.static('public'))

// create a custom middleware for logging the HTTP Method and the path 
app.use((req, res, next) => {
    console.log('inside middleware')
    console.log(`${req.method} ${req.path}`)
    next()
})

//Connect our fruit routes to our express app
app.use('/flight', flightRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})

/* 
NOTES 
npm i
npm init -y
npm i dotenv
npm i express 
npm i react
npm install jsx-view-engine react react dom 
npm install method-override
*/