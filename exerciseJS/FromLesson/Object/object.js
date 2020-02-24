
// Accessing Properties
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;
let planetArray = spaceship.flightPath;

console.log(crewCount); //5
console.log(planetArray); //[ 'Venus', 'Mars', 'Saturn' ]

//=====================================================================
//Bracket Notation

let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
let returnAnyProp = (objectName, propName) => objectName[propName];


returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
};

let propName = 'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']); // log key and value //true
console.log(isActive); //true

//=====================================================================
let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 9;
delete spaceship['Secret Mission'];
console.log(spaceship); //{'Fuel Type': 'Turbo Fuel',homePlanet: 'Earth',color: 'glorious gold',numEngines: 9 }