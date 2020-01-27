const alienShip = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
  };
  alienShip.invade();

  //===============================
  class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

surgeonCurry.takeVacationDays(14); // 6
console.log(surgeonCurry.remainingVacationDays);  
console.log(surgeonDurant.remainingVacationDays);


 //======================================
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
    this._behavior++;
  }
}

const halley = new Dog('Halley');
console.log(halley.incrementBehavior());

let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior

let bradford = new Dog('Bradford'); // Creat dog name Bradford and
