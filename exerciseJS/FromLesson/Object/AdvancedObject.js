const robot = {
    model: 'B-4MI',
    mobile: true,
    greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
  
  const massProdRobot = (model, mobile) => {
    return {
      model,
      mobile,
      greetMaster() {
        console.log(`I'm model ${this.model}, how may I be of service?`);
      }
    }
  }
  
  const shinyNewRobot = massProdRobot('TrayHax', true)
  
  const chargingStation = {
    _name: 'Electrons-R-Us',
    _robotCapacity: 120,
    _active: true,
    _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],
  
    set robotCapacity(newCapacity) {
      if (typeof newCapacity === 'number') {
        this._robotCapacity = newCapacity;
      } else {
        console.log(`Change ${newCapacity} to a number.`)
      }
    },
    get robotCapacity() {
      return this._robotCapacity;
    }
  }
  
  //============================================================================
  const robot = {
  model :'1E78V2',
  energyLevel: 100,
  provideInfo(){
  return `I am ${this.model} and my current energy lavel is ${this.energyLevel}. `
  }
};

console.log(robot.provideInfo());





//------------------------- Arrow Functions and this ---------------------

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType); // Can's access this in arrow fuction we have to change it to  change, the method to use a function expression. You can write the function using either longhand or shorthand format.
  }
};

goat.diet();  // undefined
// -------------- Change to be look like this ----------------------

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet ()  {
    console.log(this.dietType);
  }
};
goat.diet(); // print baaa

// -------------- Privacy ----------------------
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel} %.`)
  }
};
robot._energyLevel = 'high'
robot.recharge() //Recharged! Energy is currently at 130 %.


// --------------  Getters ----------------------


const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method: 
console.log(person.fullName); // 'John Doe'  อันนี้ถ้าใช้ getter ในการเรียกหรือทำงาน 


const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}

// To call the getter method:
console.log(person.fullName()); // 'John Doe'  // fullName is method of person object and we don't use getter

const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`
    }else{
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};
console.log(robot.energyLevel) //My current energy level is 100


//-----------------  Setters -------------------------
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' &&  num >= 0){
        this._numOfSensors = num;
    }else{
      console.log('Pass in a number that is greater than or equal to 0')
    }

  }
  
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors) // 100

// -------------  Factory Functions --------------------------------

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'Booo!!');
ghost.scare(); // Booo!!

// -------------  Factory Functions -------------------------------- 