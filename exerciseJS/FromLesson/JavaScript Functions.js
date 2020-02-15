
// Arrow Functions in JavaScript (ES6)
// Arrow function with two arguments 
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: 7 

// Arrow function with no arguments 
const printHello = () => {
    console.log('hello');
};
printHello(); // Prints: hello

// Arrow functions with a single argument 
const checkWeight = weight => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms.

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60 

//============================================================================
//    JavaScript Functions
// Defining the function:
function sum(num1, num2) {
    return num1 + num2;
}

// Calling the function:
sum(3, 6); // 9


//============================================================================
// JavaScript Anonymous Functions คือ ฟังชั่น ที่ไม่ระบุชื่อ  
// Named function
function rocketToMars() {
    return 'BOOM!';
}

// Anonymous function
const rocketToMars = function () {
    return 'BOOM!';
}

//============================================================================
//   JavaScript Function Expressions
const dog = function () {
    return 'Woof!';
}