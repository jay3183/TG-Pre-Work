


const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// mission controls

const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());



//  I can also wrap any collection of data and functions in an object, and export the object using module.exports
