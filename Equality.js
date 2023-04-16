// loose Equality
console.log(1 == "1"); // true
console.log(1 == true); // true
console.log(0 == false); // true
console.log(0 == ""); // true

// Strict Equality
console.log(1 === "1"); // false
console.log(1 === true); // false
console.log(0 === false); // false
console.log(0 === ""); // false

// Loose Inequality
console.log(1 != "1"); // false
console.log(1 != true); // false
console.log(0 != false); // false
console.log(0 != ""); // false

// Strict Inequality
console.log(1 !== "1"); // true
console.log(1 !== true); // true
console.log(0 !== false); // true
console.log(0 !== ""); // true

// Ternary Operator
const age = 21;
const drink = age >= 18 ? "Beer" : "Juice";
console.log(drink);

// Comparing Objects
const person1 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
};
const person2 = {
    name: "Junaid",
    age: 21,
    address: "Karachi",
};
console.log(person1 == person2); // false
console.log(person1 === person2); // false

