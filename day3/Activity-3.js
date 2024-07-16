//Switch Case
    //day of the week

let day=4;

if(day==1){
    console.log('Monday');
}else if(day==2){
    console.log('Tuesday');
}else if(day==3){
    console.log('Wednesday');
} else if(day==4){
    console.log('Thursday');
}else if(day==5){
    console.log('Friday');
}else if(day==6){
    console.log('Saturday');
} else if(day==7){
    console.log('Sunday');
}else{
    console.log('Invalid Day');
}


    //grade assign (A B C D F) based on score switch case
let grade = 70;
switch(true){
    case grade>=90:
        console.log(`A score= ${grade}`);
        break;
    case grade>=80:
        console.log(`B score= ${grade}`);
        break;
    case grade>=70:
        console.log(`C score= ${grade}`);
        break;
    case grade>=60:
        console.log(`D score= ${grade}`);
        break;
    default:
        console.log(`F score= ${grade}`);
}
