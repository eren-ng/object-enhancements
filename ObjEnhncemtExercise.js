//Given: Same keys and values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  
  /* Same keys and values; Write an ES2015 Version */
  function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName,
    };
  };
  
  
  // Given: Computed Property Names
  var favoriteNumber = 42;
  var instructor = {
    firstName: "Colt"
  }
  instructor[favoriteNumber] = "That is my favorite!"
  
  /* Computed Property Names; Write an ES2015 Version */
  let favoriteNumber = 42;
  const instructor = {
    firstName: "Colt", 
    [favoriteNumber]: "That is my favorite!"
  }
  instructor[favoriteNumber] = "That is my favorite!"
  
  
  // Given: Object Methods
  var instructor = {
      firstName: "Colt",
      sayHi: function(){
          return "Hi!";
      },
      sayBye: function(){
      return this.firstName + " says bye!";
      }
  }
  
  /* Object Methods; Write an ES2015 Version */
  const instructor = {
      firstName: "Colt",
      sayHi(){
          return "Hi!";
      },
      sayBye(){
      return this.firstName + " says bye!";
      }
  }
  
  
  // createAnimal function
  function createAnimal(species, verb, noise) {
      return {
          species, 
          [verb](){
              return noise;
          } 
      }
  };