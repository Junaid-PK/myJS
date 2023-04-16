const profile = {name:"Junaid",
                 age: 21,
                 address: "Karachi",
                 hobbies: ["Coding","Gaming","Reading"],
                 isMarried: false,};
console.log( typeof profile); 

// Creating objects using constructor function
function Person(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
}
const person = new Person("Junaid",21,"Karachi");
console.log(person);

// Using Symbols
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id === id2); // false

// Using Symbols in objects
const person1 = {
    name: "Junaid",
    age: 21,
    [id]: 123,
    [id2]: 456,
    id: 789,
};
console.log(person1);

// hasOwnProperty vs in operator
console.log(person1.hasOwnProperty('name')); // true
console.log('name' in person1); // true
console.log('toString' in person1); // true
console.log(person1.hasOwnProperty('toString')); // false

// Functions inside objects
const person2 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
    hobbies: ["Coding","Gaming","Reading"],
    isMarried: false,
    greet: function(){
        console.log("Hello World");
    }
};
person2.greet();


// Getter and Setter
const person3 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
    hobbies: ["Coding","Gaming","Reading"],
    isMarried: false,
    get ageInMonths(){
        return this.age * 12;
    }
};
console.log(person3.ageInMonths);

// Setter
const person4 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
    hobbies: ["Coding","Gaming","Reading"],
    isMarried: false,
    set ageInMonths(value){
        this.age = value / 12;
    }
};
person4.ageInMonths = 24;
console.log(person4.age);

// inheritance
function Person(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
}
Person.prototype.greet = function(){
    console.log("Hello World");
}
const person5 = new Person("Junaid",21,"Karachi");
person5.greet();


// Iterating over objects
const person6 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
    hobbies: ["Coding","Gaming","Reading"],
    isMarried: false,
};
for(let key in person6){
    console.log(key);
}
for(let key in person6){
    console.log(person6[key]);
}


// foreach
Object.keys(person6).forEach(key => {
    console.log(key);
});

// Object.values
Object.values(person6).forEach(value => {
    console.log(value);
});

// Object.entries
Object.entries(person6).forEach(entry => {
    console.log(entry);
});

// Assigning objects
const person7 = {
    name: "Junaid",
    age: 21,
};
const person8 = {
    address: "Karachi",
    hobbies: ["Coding","Gaming","Reading"],
    isMarried: false,
};

const person9 = Object.assign(person7,person8);
console.log(person9);

// Object.freeze
const person10 = {
    name: "Junaid",
    age: 21,
};
Object.freeze(person10);
person10.name = "Junaid Ali";
console.log(person10);

// Object.seal
const person11 = {
    name: "Junaid",
    age: 21,
};
Object.seal(person11);
person11.name = "Junaid Ali";
console.log(person11);



