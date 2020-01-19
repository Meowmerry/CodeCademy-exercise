const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);
//[ 'model', 'mobile', 'sentient', 'armor', 'energyLevel' ]

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);


console.log(robotEntries);
//[ [ 'model', 'SAL-1000' ],[ 'mobile', true ],[ 'sentient', false ],[ 'armor', 'Steel-plated' ],[ 'energyLevel', 75 ] ]

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot)

console.log(newRobot);
//{ laserBlaster: true,voiceRecognition: true,model: 'SAL-1000',mobile: true,sentient: false,armor: 'Steel-plated',energyLevel: 75 }