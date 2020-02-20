//Arrays

const hobbies = ['swiming', 'basgetball', 'reading', 'coding'];
console.log(hobbies) //[ 'swiming', 'basgetball', 'reading', 'coding' ]

//===========================================================================
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem) //Fortune favors the brave.
console.log(famousSayings[2]); //Where there is love there is life.
console.log(famousSayings[3]); //undefined



// ===========================================================================
// Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo'
console.log(condiments); //[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]

condiments = ['Mayo']
utensils[3] = 'Spoon';
console.log(utensils); //[ 'Fork', 'Knife', 'Chopsticks', 'Spoon' ]

// ===========================================================================
// The .length property

const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length) // 3

// ===========================================================================
// The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('studying Javascript', 'exercise')
console.log(chores);
// [
//     'wash dishes',
//     'do laundry',
//     'take out trash',
//     'studying Javascript',
//     'exercise'
//   ]

// ===========================================================================
// The .pop() Method

const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores)
//[ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]

//================================================================
// More Array Methods.


const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
//console.log(groceryList); 
// [ 'bananas',
// 'coffee beans',
// 'brown rice',
// 'pasta',
// 'coconut oil',
// 'plantains' ]


groceryList.unshift('popcorn');
console.log(groceryList);['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

console.log(groceryList.slice(1, 4)); //[ 'bananas', 'coffee beans', 'brown rice' ]


console.log(groceryList); //[ 'popcorn','bananas','coffee beans', 'brown rice','pasta','coconut oil','plantains' ]

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex); // 4

//========================================================

// Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[1] = 'CAN-CAN';

}


changeArr(concept);
console.log(concept); //[ 'arrays', 'CAN-CAN', 'be', 'mutated' ]

function removeElement(newArr) {
  newArr.push('Hello')
}

removeElement(concept);
console.log(concept); // [ 'arrays', 'can', 'be' ]

//======================================================================
//Nested Arrays
let numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];
console.log(target) //6

//======================================================================