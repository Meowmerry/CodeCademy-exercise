// Higer order functions
// - Returning a function
// -  Accepting a function as an argument
// EX ===> filter()   map()  reduce()

let persons = [
    {name: "John", age : 17},
    {name: "Jane", age : 10},
    {name: "Jim", age : 15},
];

// ------ filter() ------
//  เขียนแบบปกติที่ไม่ใช้ filter
// let kids = [];
// for ( let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if(person.age <= 15){
//         kids.push(person)
//     }}


// เขียนโดยใช้ filter 
const kids = persons.filter((person) => person.age <= 15);
console.log('Kids : ', kids);



// ------ map() -------------
//  เขียนแบบปกติที่ไม่ใช้ map
// const orderPersons = [];
// for (let i = 0;i < persons.length ; i++){
//     const person = persons[i];
//     orderPersons.push(({
//         ...person, 
//         age: person.age * 2
//     }))
// }

//  เขียนแบบใช้ map
const orderPersons = persons.map(person => {
    return {
        ...person,
        age: person.age * 2
    }
})
// เขียนแบบสั้นได้แบบนี้
const orderPersons = persons.map(person => ({
    ...persons, 
    age: person.age * 2
}));
console.log('Older persons: ', orderPersons);


// --------- reduce () -------------
// เขียนแบบปกติไม่ใช้ reduce()
// let totalAge = 0;
// for(let i =0; i <persons.length; i ++){
//     const person = persons[i];
//     totalAge += person.age;
// }

// เขียนแบบใช้ reduce()
const totalAge = persons.reduce((age, person) =>{
    return age + person.age;
}, 0);

// แบบสั้น
const totalAge = persons.reduce((age, person) => age + person.age, 0);

console.log('Total age: ', totalAge);


let persons = [
    {name: "John", age : 17},
    {name: "Jane", age : 10},
    {name: "Jim", age : 15},
];

// --------- forEach -----------------

//-- เขียนแบบปกติ ---
// for ( let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     console.log(`Name : ${person.name}, ${person.age}`)
// }
//-- เขียนแบบ forEach() ---
// persons.forEach(person => console.log(`Name : ${person.name}, ${person.age}`))

// --------- find() -----------------

//-- เขียนแบบปกติ ---
// let jane;
// for ( let i = 0; i < persons.length; i++){
//     const person = persons[i];
//     if(person.name === 'Jane'){
//         jane = person;
//         break
//     }
// }


//-- เขียนแบบ find() ---

// const jane = persons.find(person=> person.name === "Jane")
// console.log('Jane :', jane)

//----------  findIndex() -----------

// const janeIndex = persons.findIndex(person=> person.name === "Jane")
// console.log('Index of Jane :', janeIndex)


// --------- every()  จำทำการเช็ค  true หรือ false ทุกๆ ตัว ถ้ามีตัวใดตัวหนึี่งเป็น false ทั้งหมดจะเป็น false ------------
//-- เขียนแบบปกติ ---
let isKids = true;
for (let i = 0; i < persons.length ; i++){
    const person = persons[i];
    if(person.age > 15){
        isKids = false;
        break;
    }
}
console.log('isKid :', isKids);
//-- เขียนแบบ every() ---
const isKids = persons.every((person) )


console.log('isKid :', isKids);

// --------- some() จำทำการหา true หรือ false  บางตัว ถ้ามีตัวใดตัวหนึี่งเป็น false ทั้งหมดจะเป็น false -------------


// --- การสร้าง Higher order functions ด้วยตัวเอง ---------- 

let persons = [
    {name: "John", age : 17},
    {name: "Jane", age : 10},
    {name: "Jim", age : 15},
];

function myFilter(arr, callback){
    const result = [];
    for ( let i = 0; i < arr.length ; i++){
        const element = arr[i];
        if(callback(element)){
            result.push(element)
        }
    }
    return result;
}

const kids = myFilter(persons,(person) => person.age <= 15);
console.log('Kids : ', kids);
// เนื่องจาก filter() เป็น method จาก Array class  หากเราต้องการให้  myFilter ทีเราสร้างเองทำงานแบบ Filter เราสามารถนำไปผูกกับ Array Class ได้โดยทำดังนี้

let persons = [
    {name: "John", age : 17},
    {name: "Jane", age : 10},
    {name: "Jim", age : 15},
];

  Array.prototype.myFilter = function myFilter(callback){
    const result = [];
    for ( let i = 0; i < this.length ; i++){
        const element = this[i];
        if(callback(element)){
            result.push(element)
        }
    }
    return result;
}
const kids = persons.myFilter(person => person.age <= 15);
console.log('Kids : ', kids);