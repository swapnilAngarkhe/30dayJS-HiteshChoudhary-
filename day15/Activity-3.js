function task5(size){

    const function_array = [];

    for(let i=0; i<size; i++){
        function_array.push((function(index){
            return function(){
                console.log(`Function index: ${index}`);
            }
        })(i));
    }

    return function_array;
}

const func = task5(8);

func.forEach( func => func());