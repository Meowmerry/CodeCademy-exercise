//Which line of code would NOT print the value saved to the _num key in the tempObj object.
let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};
console.log(tempObj._num) //22
console.log(tempObj.num) //22
console.log(tempObj['num']) //22
console.log(tempObj.num()); // Since we wrote a getter, we can use regular access notation: tempObj.num so this would print 22


// What should we add to the empty .withDiscount() method to return the cost of the meatballs object with a two dollar discount?
let meatballs = {
    cost: 5,
    withDiscount() {
        return this.cost - 3
    }
};
console.log('The result is ' + meatballs.withDiscount()) // 2


//What will the following code output?
const car = {
    numDoors: 4,
    isDirty: true,
    color: 'red'
  }
  
  for (let key in car) {
    console.log(key)
  }
// numDoors
// isDirty
// color



