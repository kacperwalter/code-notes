class FamilyTest {
    constructor(name) {
      this.name = name;
    }
    addMember() {
      
    }
  }
  
  const nowakowie = new FamilyTest();
  
  class Family {
    constructor(members, ...names) {
      this.members = members;
      this.names = names;
    }
    addMember(newMember) {
      this.names.push(newMember);
      this.members++;
    }
    static makeFamily(...members) {
      return members;
    }
  }
  
  const kowalscy = new Family(3, "Jan", "Ewa", "Adam");
  
//   console.log(kowalscy);
  
//   kowalscy.addMember("andrzej");
  
//   console.log(kowalscy);
  
//   console.log(Family.makeFamily("Jan", "Ewa"));



// INHERITANCE - extends and super 

