//Spread & rest Oprator
//task-5: use spread operator 
const arr1 = [1, 2, 3];
const newar=[...arr1,4,5,6]
console.log(newar);

//task-6: use rest operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3));
