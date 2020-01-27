//Create the variable 
const kelvin = 293;

//convert Kelvin to Celsius by subtracting 273
const celsius = kelvin - 273;

// use this equation to calculate Fahrenheit.
let fahrenheit = celsius *(9/5) + 32;

//Use the .floor() from the Math to round
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
//The temperature is 68 degrees Fahrenheit.