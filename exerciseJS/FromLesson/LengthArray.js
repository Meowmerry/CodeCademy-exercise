// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length-8];
console.log(lastLetterOfLastName)

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3])
console.log(myArray) //[ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

//==================================
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop()
console.log(removedFromMyArray) //[ 'cat', 2 ]

//=================================
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35])
console.log(myArray) //[ [ 'Paul', 35 ], [ 'dog', 3 ] ]

 //=========================================
 function functionWithArgs(a, b) {
    console.log(a + b);
  }
functionWithArgs(1,2); //3
functionWithArgs(7,9);//16