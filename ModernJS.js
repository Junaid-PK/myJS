// Call a function on array
const arr = [1,2,3,4];

const doubledArray = arr.map((num)=>{
    return num*2;
});

console.log(doubledArray);

// one liner anonymous functions
const tripledArray = arr.map(num=>num*3);

console.log(tripledArray);

// Destructuring Array into variables

const [first,second, ...rest] = arr;
console.log(first,second,rest);

// Destructuring in Objects 
const person = {
    name: "Junaid",
    age: 21,
}

const {name:fname, ...rest2} = person;
console.log(fname);
console.log(rest2);


// Combining Arrays
const a= [1,2,3];
const b= [4,5,6];

const combined = [...a , ...b];
console.log(combined);

// Template Litterals
const name = "junaid";
console.log(`Hello ${name}`)

// Null Safety
const obj = {
    a: {
        // b:"b",
        c:"c",
    },
}
console.log(obj?.a?.b);
