// 1.
const numberArray=[17,20,54,67,71];

const sum=numberArray.reduce(function(a,b){
    return a+b}, +0);

console.log(sum);

// 2.

const personArray = [{name: "natia", age: 29, address:"mukhiani"}, {name: "milana", age: 29, address:"gldani"}, {name: "tamuna", age: 30, address:'vazisubani'}];

// 3.
console.log('my name is', (personArray[0].name));
console.log('my age is',(personArray[0].age));
console.log('my address is',(personArray[0].address));

// 4.

 if ((personArray[0].age) < 19) {
        console.log('i am a teenager');
 } else {
        console.log("i am an adult");
} 


