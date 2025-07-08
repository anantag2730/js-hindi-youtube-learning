// node classes_and_OOPS/mathPI.js

// const descripter=Object.getOwnPropertyDescriptor(Math,"PI");
// console.log(descripter);

// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const chai={
    name:"Ginger",
    price:299,
    isAvailable:true,
    orderNow:function(){

    }
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable: false,
  enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function')
    console.log(`${key} :   ${value}`);
}