const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater('Monday')) //false
 //============================================================================

const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet: () => {
      console.log(this.dietType);
    }
  };
  
  goat.diet(); // Prints undefined

  //============================================================================
  const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();  //Energy is currently at 100%.

  //============================================================================
  const plantNeedsWater = day => 
  day === 'Wednesday' ? true : false;
  console.log(plantNeedsWater())

