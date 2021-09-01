const Flight = require("./Flight")


class Airport {
    constructor() {
        this.name = 'Nikola Tesla'
        this.listOfFlights = [];
        //Add addFlight method to Airport. It should add the flight to the list of flights of the airport.
        //In you main program function, create an instance of the Airport object. 
        this.addFlight = function (flight) {
            if (!flight || !(flight instanceof Flight)) {
                throw new Error ('Invalid flight data')
            }
            this.listOfPassengers.addFlight();
        }
        this.getPassengersNumber = function () {
            var count = 0;
            this.listOfFlights.forEach(function(flight){
                count += flight.listOfPassengers.length;
            })
        }
        this.getData = function () {
            var result = 'Airport: ' + this.name + ', total passenegers' + this.getPassengersNumber() + '\n';
            this.listOfFlights.forEach(function(flight){
                result += flight.getData(); 
            })
        }

    }
}
module.exports = Airport;