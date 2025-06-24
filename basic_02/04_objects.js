// node basic_02/04_objects.js

 const tinderUser=new Object()// ->singleton object 

 tinderUser.id="123abc"
 tinderUser.name="Anant"
 tinderUser.LoggedIn=false
//  console.log(tinderUser);

const anotherUser={
    email:"hiten@gmail.com",
    fullname:{
        username:{
            firstname:"Anant",
            lastName:"Agarwal"
        }
    }
}

const obj1={1:"a",2:"b"}
const obj2={3:"a",5:"b"}
const obj3={obj1,obj2}
console.log(obj3);
const obj4=Object.assign({},obj1,obj2)
console.log(obj4);

// spreading
const obj5={...obj1,...obj2}
console.log(obj5);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("logged"));
