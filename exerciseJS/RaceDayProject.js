let raceNumber = Math.floor(Math.random() * 1000);

let registerEarly = false;
let age = 50;

if (registerEarly && age > 18) {
  raceNumber += 1000;
}

if (registerEarly && age > 18) {
  console.log(`Race will begin at 9:30. your race number is : ${raceNumber}`);
} else if (!registerEarly && age > 18) {
  console.log(`Race will begin at 11:00. your race number is : ${raceNumber}`);
} else if (!registerEarly && age < 18) {
  console.log(`Race will begin at 12:30. your race number is : ${raceNumber}`);
} else {
  console.log(`Thanks please you should go to see the registration desk`);
}



let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else { 
  console.log("Keep on running!"); // Nice workout!
}




let weather = "spring";
let clothingChoice = "";

if (weather === "spring") {
  clothingChoice = "Put on rain boots.";
} else if (weather === "summer") {
  clothingChoice = "Make sure to take your sunscreen.";
} else if (weather === "fall") {
  clothingChoice = "Wear a light jacket.";
} else if (weather === 'winter') {
  clothingChoice = "Wear a heavy coat.";
} else {
  console.log('Invalid weather type.');
};
console.log(clothingChoice);  //Put on rain boots.

let groceryItem = "apple";

switch (groceryItem) {
  case "tomato":
    console.log("Tomatoes are $0.49");
    break;
  case "lime":
    console.log("Limes are $1.49");
    break;
  case "papaya":
    console.log("Papayas are $1.29");
    break;
  default:
    console.log("Invalid item"); //Invalid item
    break;
}