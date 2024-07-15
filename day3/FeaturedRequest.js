//if a num is posetive negetive or 0
let num=90;

if(num>0){
    console.log(' the number is positive');
}else if(num<0){
    console.log(' number negative');
}else{
    console.log('number zero');
}


//eligible to vote 
let age=19;
if(age>=18){
    console.log('eligible to vote');
}else{
    console.log('not eligible to vote');
}


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


//check if leap year 

let year = 2020;

if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}