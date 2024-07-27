// TASK-3, TASK-4 
function idGenerator() {
    let oldId = 0;
    return function () {
      return ++oldId;
    };
  }
  const generateId = idGenerator();
  
  console.log(generateId()); 
  console.log(generateId()); 
  console.log(generateId()); 


function greetUser(name) {
  return function() {
    console.log(`Hello, ${name}!`); 
  };
}
const greet = greetUser("snoop");
greet(); 
  