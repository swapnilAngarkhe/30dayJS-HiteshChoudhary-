//TASK-5 TASK-6

class Person{
    constructor(username,age){
        this.username=username;
        this.age=age;
    }
    static greetPerson(){
        return `Greetings ${this.username}`
    }
}

console.log(Person.greetPerson());
    //throws error: Greetings undefined



class Student extends Person {
    static totalStudents = 0;
    constructor(name, age, ID) {
        super(name, age);
        this.ID = ID;
        Student.totalStudents++;
    }
}

const student1 = new Student("John", 20, 1234);
console.log(`Total students: ${Student.totalStudents}`);

const student2 = new Student("Juan", 22, 12111);
console.log(`Total students: ${Student.totalStudents}`);

const student3 = new Student("Niqya", 21, 2222);
console.log(`Total students: ${Student.totalStudents}`);