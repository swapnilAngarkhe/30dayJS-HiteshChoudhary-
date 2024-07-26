//Task7 Task8

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greetPerson() {
        return `Greetings ${this.firstName} ${this.lastName}`;
    }

    updateAge() {
        return `updated age = ${this.age + 2}`;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    
    set fullName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


const person1 = new Person('John', 'Doe', 25);

console.log(person1.fullName); 


person1.fullName = 'Jane Smith';

console.log(person1.fullName); 
