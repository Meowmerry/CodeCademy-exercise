
//Blocks and Scope
const city = 'New York City';
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;

}
console.log(logCitySkyline()) // The stars over the Empire State Building in New York City

//===============================================================================================

// Global Scope
let satellite = 'The Moon';
let galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());  //Night Sky: The Moon, North Star, and The Milky Way


//=========================================================
//Block Scope

const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves)
}
logVisibleLightWaves(); // Moonlight
console.log(lightWaves) //It will be threw errow because outside of block

//==================================================================

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky()); //Night Sky: The Moon, Sirius, The Milky Way
console.log(stars); //Sirius
