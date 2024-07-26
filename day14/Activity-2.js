//Task-3 TASK-4
class Person{
    constructor(username,age){
        this.username=username;
        this.age=age;
    }
    greetPerson(){
        return `Greetings ${this.username}`
    }
    updateAge(){
        return `updated age = ${this.age+2}`
    }
}

class Student extends Person{
    constructor(username,id){
        super(username);
        this.id=id;
    }
    greetPerson(){
        return `Greetings ${this.username}, your ID is ${this.id}`;
    }
    getStudent(){
        return `  name: ${this.username}, id: ${this.id}`;
    }
    
}

const student1= new Student('rakesh',111);
console.log(student1);
console.log(student1.greetPerson());
console.log(student1.getStudent());