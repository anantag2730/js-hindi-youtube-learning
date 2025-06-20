// node basic_01/05_datatype.js

// primitive
// 7 types->string,symbol(),number,bigint,null,undefined,boolean

//Reference or non-primitive ->objects ,array, function

//Array
let heros=["shaktiman","hero1","hero2"]
//object
let myObj={
    name:"Anant",
    age:12
};

//Symbol()
const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id==anotherId);
