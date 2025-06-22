// node basic_01/06_string.js

let name="Anant";
let repoCount=50;

console.log(name+repoCount+" Value");// not advisiable

console.log(`Hello my name is ${name} and my repo count is ${repoCount}. `);

name="Hello Anant"
console.log(`Hello my name is ${name} and my repo count is ${repoCount}. `);

const gameName=new String("Anant-ic")
// console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,5);
console.log(newString)

const anotherString=gameName.slice(-7,6)// cam accept negavite values
console.log(anotherString)


const newStringOne="        hihihhih        ";
console.log(newStringOne);
console.log(newStringOne.trim());// remove string anm=d end spcaes 

const url="https:anant.com/anant%20agarwal"

console.log(url.replace("%20",'-'));
console.log(url.includes("anant"));
console.log(gameName.split('-'));//spilt(separator,limit)
