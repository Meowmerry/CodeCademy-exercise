class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  
  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular')
  
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics')
  
  console.log(surgeonCurry.name, surgeonCurry.department);
  //Curry Cardiovascular
  
  console.log(surgeonDurant.name,surgeonDurant.department);
  //Durant Orthopedics