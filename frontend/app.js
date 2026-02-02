// factory function to create a user object
// function personMaker(name, age) {
//   const person = {
//     name: name,
//     age: age,
//     talk() {
//       console.log(
//         `Hello, my name is ${this.name} and I am ${this.age} years old.`,
//       );
//     },
//   };
//   return person;
// }

// structure using constructor function to create a user object
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.talk = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// let p1 = new Person("adam", 18);
// let p2 = new Person("eve", 17);

// p1.talk();
// p2.talk();

// class syntax to create a user object

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let p1 = new Person("adam", 18);
// p1.talk();
// let p2 = new Person("eve", 17);
// p2.talk();
// console.log(p1.talk == p2.talk);

// Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
  constructor(name, age, marks) {
    super(name, age); // parent class constructor call
    this.marks = marks;
  }

  talk() {
    console.log(
      `Hello, my name is ${this.name} and I have ${this.marks} marks.`,
    );
  }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;         
    }
    talk() {
        console.log(`Hello, my name is ${this.name} and I teach ${this.subject}.`);
    }
}

let stu1 = new Student("adam", 18, 95);
let tea1 = new Teacher("eve", 30, "Maths");
stu1.talk();
tea1.talk();

class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }

    eat() {
        console.log("I am eating.");
    }
}

class Dog extends Mammal{
    constructor(name) {
        super(name);
    }

    bark() {
        console.log("Woof! Woof!");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }   

    bark() {
        console.log("Meow! Meow!");
    }
}

let dog1 = new Dog("Buddy");
dog1.eat();
dog1.bark();

let cat1 = new Cat("Whiskers");
cat1.eat();
cat1.bark();    
console.log(cat1.type);