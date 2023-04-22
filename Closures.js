let globalNum = 5;

function add() {
    const localNum = 4;
    // lexical scope
    return globalNum + localNum;
}
globalNum = 10;

console.log(add());

function closureExample() {
    let num = 5;
    return function() {
        return num;
    }
}

const closure = closureExample();
console.log(closure());


function makeFunctions() {
    let n = 0;
    return {
        increment: function() {
            n++;
        }
        , decrement: function() {
            n--;
        }
        , get: function() {
            return n;
        }
    }        
}

const functions = makeFunctions();
functions.increment();
functions.increment();
functions.increment();
functions.decrement();
console.log(functions.get());


// let vs var
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log(i);

for (let j = 0; j < 10; j++) {
    console.log(j);
}
console.log(j);