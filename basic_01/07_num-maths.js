// node basic_01/07_num-maths.js

const score=500
console.log(score);// 500

const balance=new Number(30)
console.log(balance);// [Number:30]

console.log(balance.toString());
console.log(balance.toString().length)
console.log(balance.toFixed(3));
console.log(balance.toFixed(2));

const anotherNumber=23.8956
console.log(anotherNumber.toPrecision(3));// only 1-21 value
console.log(anotherNumber.toPrecision(2));
console.log(anotherNumber.toPrecision(4));
console.log(anotherNumber.toPrecision(1));

const hundreds=10000000
console.log(hundreds.toLocaleString());//10,000,000
console.log(hundreds.toLocaleString('en-IN'));//1,00,00,000


console.log(Math.random());// values including 0 to 1 ,1 also include
console.log(Math.floor((Math.random()*10) + 1));// +1 to avoid non zero value 

const min=10
const max=20
let randomNumber=Math.floor(Math.random() *(max-min+1)) + min;
console.log(`Random Number between ${min} and ${max} is ${randomNumber}.`);
 