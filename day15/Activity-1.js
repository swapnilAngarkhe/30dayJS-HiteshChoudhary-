// TASK-1, TASK 2
function outter(){
    let phone="Nothing"

    function inner(){
        console.log(phone)
    }
    inner()
}
outter()

function counter() {
    let counter = 0;
    return function () {
        counter += 1;
        console.log(counter);
    }
}
let add=counter()
add(); 
add();
add();
add();
add();