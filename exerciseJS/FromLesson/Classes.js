class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console = Halley
console.log(halley.behavior); // Print behavior value to console  =0
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console = Halley
console.log(halley.behavior); // Print behavior value to console  =1


  //=================================================
  let halley = {
  _name: 'Halley',
  _behavior: 0,

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  }
}


//How would you call the .randomBorough() method in the example below?
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);
console.log(Apartment.randomBorough());


//Which of the following is a method of the RentalUnit class?
class RentalUnit {
  constructor(address, cost) {
    this._address = address;
    this._cost = cost;
  }

  get address() {
    return this._address;
  }

  get cost() {
    return this._cost;
  }

  calculateMonthly() {
    return this.cost / 12; 
  }
}
const newRental = new RentalUnit('xxx', 32)
console.log(newRental.calculateMonthly());

//Why will the code below throw an error?
class RentalUnit {
  constructor(address, costPerYear) {
    this._address = address;
    this._costPerYear = costPerYear;
  }

  get address() {
    return this._address;
  }

  get costPerYear() {
    return this._costPerYear;
  }

  calculateMonthly() {
    return this.costPerYear / 12; 
  }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
 
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);

