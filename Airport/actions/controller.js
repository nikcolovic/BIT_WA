const Person = require("../entities/Person")
const Seat = require("../entities/Seat")
const Passenger = require("../entities/Passenger")
const Flight = require("../entities/Flight")


const createFlight = (relation, date) => {
    return new Flight(relation, date)
}
/* Inside your immediately-invoking function, add createPassenger function that receives a first name, 
last name, seat number and category and returns a created Passenger.*/
const createPassenger = (firstName, lastName, seatNumber, category) => {
    var person = new Person (firstName, lastName)
    var seat = new Seat (seatNumber, category)
    return new Passenger(person, seat)
}

module.exports = { createFlight, createPassenger }