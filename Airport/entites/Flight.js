const Passenger = require("./Passenger")


class Flight {
    constructor(relation, date){
        if (!relation || !date) {
            throw new Error ('Invalid relation or date input')
        }
        //Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list
        // of a given flight. 
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassengers = [];
        this.addPassenger = function (passenger) {
            if (!passenger || !(passenger instanceof Passenger)) {
                throw new Error ('INvalid passenger data')
            }
        this.listOfPassengers.push(passenger);
        }
    }
}

module.exports = Flight;

