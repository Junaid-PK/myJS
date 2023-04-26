'use strict'

function logThis(x,y)
{
    console.log(x,y);
    console.log(this);

}

const obj = {
    x:10
};

// const bound = logThis.bind(obj);

// bound(10,30);

logThis.call(obj, 10, 20);

const arr = [1,2,3]

arr.forEach(function(num){
    console.log(this);
    console.log(num);
},{x:10});

class Person{
    constructor(name){
        this.name = name;
        console.log(this);
    }

    speak(params) {
        console.log('This is '+this.name);
    }
}

const p1 = new Person("Junaid");
p1.speak();
