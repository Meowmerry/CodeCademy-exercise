const spaceShip = {
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captaion: {
      name: "Sandra",
      degree: "Computer Enginering",
      encourageTeam() {
        console.log("We got this!");
      }
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50
    }
  }
};
console.log(spaceShip.nanoelectronics['back-up'].battery); // Returns 'Lithium'

console.log(spaceShip.crew.captaion);
//================================================================
let spaceship = {
  passengers: [{ name: 'space kitty'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew.captain['favorite foods'][1];
console.log(capFave); //cakes
let firstPassenger = spaceship.passengers[0]
console.log(firstPassenger); // { name: 'space kitty' }





