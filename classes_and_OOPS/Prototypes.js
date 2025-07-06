// node classes_and_OOPS/Prototypes.js

// let myName="anant       "
// console.log(myName.trueLength);
// console.log(myName.length);


let myHeros=["thor","spiderman"]

let heroPowers={
    thor:"hammer",
    spiderman:"sling",
    getSpidyPower:function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.anant=function(){
    console.log("anant is present in all objects.");
}
Array.prototype.heyAnant=function(){
    console.log("Anant is saying heyy.");
}
heroPowers.anant();//anant is present in all objects
myHeros.anant();//anant is present in all objects

myHeros.heyAnant();
// heroPowers.heyAnant();// no access


// inheritance

const user={
    name:"anant",
    email:"example.com"
}
const teacher={
    makeVideos:true
}
const teachingSupport={
    isAvailable:true
}
const TASupport={
    full_time:true,
    __proto__:teachingSupport
}
teacher.__proto__=user;

// mordern syntax
Object.setPrototypeOf(teacher,teachingSupport);


let myName="anant       "
String.prototype.trueLength=function(){
    console.log(`${this}`);//"anant       "
    console.log(`True length is ${this.trim().length}`);
};

console.log(myName.trueLength());
console.log(myName.length);