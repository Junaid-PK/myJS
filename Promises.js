const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("I Fired"), 1000);
});
console.log(promise);

setTimeout(() => console.log(promise), 1500);

promise.then(
    (value) =>
        console.log(value), error => console.log(error)
).catch(error => console.log(error)).then(()=>console.log("Action Completed"));


Promise.all([
    new Promise((res,rej)=> setTimeout(res(3),1000)),
    new Promise((res)=>res(2))
]).then(console.log)
.catch(console.log);

Promise.race([
    new Promise((res,rej)=> setTimeout(() => res(3),1000)),
    new Promise((res)=>res(2))
]).then(console.log);

async function test(){
    try{
        const result = await new Promise((res,rej)=> setTimeout(() => res(3),1000));
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
test();

async function test2(){
    return await new Promise((res,rej)=> setTimeout(() => res(3),1000));
}

test2().then(console.log).catch(console.log);