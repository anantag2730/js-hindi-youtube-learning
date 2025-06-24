// node basic_02/03_objects.js

// singleton
// Object.create

const Sym=Symbol("key1")
const Sym2=Symbol("key2")
// object literals
const Jsuser={
    name:"Anant",
    Sym:"myKey1",// wrong type should be symbol but string to solve this use square brackets
    [Sym2]:"mykey2",
    "full name":"ANant Agarwal",
    age:20,
    location:"Agra",
    email:"anant@google.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Tuesday"]
}//object

console.log(Jsuser.email);// not prefable
console.log(Jsuser["email"]);
// console.log(Jsuser.full name);// will not work
console.log( Jsuser.Sym);
console.log(typeof Jsuser.Sym);
console.log(typeof Jsuser[Sym]);

console.log( Jsuser[Sym2]);
// console.log( Jsuser.Sym2);// wrong way to ask
// console.log(typeof Jsuser.Sym2);// wrong way to ask 
console.log(typeof Jsuser[Sym2]);

// Jsuser.email="anant@openAi.com"
// console.log(Jsuser.email);
// ////////////////////////Object.freeze(Jsuser)// no changes can be made now 
// Jsuser.email="anant@openai.com"
// console.log(Jsuser.email);


Jsuser.greeting=function(){
    console.log("Hello JS user");
}
Jsuser.greeting2=function(){
    console.log(`Hello ${this.name} kese hai aap`);
    
}
console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


