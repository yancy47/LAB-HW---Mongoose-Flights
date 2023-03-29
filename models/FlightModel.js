// Load mongoose
const mongoose = require('mongoose')

//Pointing tht eh schema property (shortcut) (schema is a class)
const Schema = mongoose.Schema

// take the current date, plus 1 year in milliseconds
// (1000*60*60*24*365)
let nextYearDate = Date.now() +(1000*60*60*24*365);
// format it and place it in a new variable 
let nextyearDateFormat = new Date(nextyearDate).toDateString();

//instantiate a new Schema object for the fruit and structure our data 
const flighSchema = new Schema({
   airline: { 
    // expecting the "name" property to be string 
    type: String,
    enum: ['American', 'Southwest', 'United', 'jetBlue']
 },
   flightNo: { type: Number,
               required: true,
               min: 10,
               max: 9999},
    departs: { type: Date, default: Date.now + 365 }
   })

// create our model using our fruitSchema and give out collection a name of "flights"
const Flight = mongoose.model('flights', flightSchema)

module.exports = Flight;

