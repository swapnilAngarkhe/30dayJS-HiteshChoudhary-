//TASK1 + TASK-2:
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

const Person1= new Person('tyla', 20);
console.log(Person1);
console.log(Person1.greetPerson());
console.log(Person1.updateAge());
