// 1.

const numberArray=[17,20,54,67,71];

const sum=numberArray.reduce(function(a,b){
    return a+b}, +0);

console.log(sum);

// 2.

const person = {
    name:"natia",
    age:29,
    address:"mukhiani"
  };
const person2 = {
    name: "milana",
    age: 29,
    address: "gldani"
};
const person3 = {
    name: "sofo",
    age: 29,
    address: "nutsubidze"
};
  
  
console.log(person, person2,person3);

// 3.

console.log('my name is', (person.name));
console.log('my age is',(person.age));
console.log('my address is',(person.address));



