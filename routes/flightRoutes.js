const express = require('express')

// Creates our router
const router = express.Router()

// Load our controller and its route logic
const meatController = require('../controllers/flightController')

// I.N.D.U.C.E.S  ->  an acronym that helps remember how to properly order routes
// Index, New, Delete, Update, Create, Edit, Show

// Setup an "index" route for meats, attach it to router along with the controller logic
router.get('/', FlightController.index)

// Setup a "new" route for creating meat
router.get('/new', FlightController.new)

// // Setup a "delete" route for removing a specific meat
// router.delete('/:name', meatController.delete)

// // Setup a "update" route for updating a specific meat
// router.put('/:name', meatController.update)

// Setup a "create" route for adding meat data
router.post('/', FlightController.create)

// // Setup a "edit" route for editing a meat
// router.get('/:name/edit', meatController.edit)

// // Setup an "show" route for meats, attach it to router along with the controller logic
// router.get('/:index', meatController.show)


module.exports = router