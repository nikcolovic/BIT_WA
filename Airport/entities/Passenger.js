const Person = require("./Person")
const Seat = require("./Seat")


class Passenger {
    constructor (person, seat) {
        if (!person || !(person instanceof Person)) {
            throw new Error ('Invalid category input')
        }
        if (!seat || !(seat instanceof Seat)) {
            throw new Error ('Invalid seat input')
        }
        //Add getData method to Passenger. It should return a formatted string containing 
        //a seat number, category letter (always in uppercase), a name and surname. 
        //To display seat data, use getData method of the Seat object. The same goes for the person data.
        //personObj, seatObj -> 12, B, John Snow
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return this.seat.getData() + ',' + this.person.getData()
        }
    }
}
module.exports = Passenger;