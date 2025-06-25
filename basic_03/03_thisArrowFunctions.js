// node basic_03/03_thisArrowFunctions.js

const user={
    username:"Anant",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website.`);
        // console.log(this); talks about the current context 
        
    }
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);//{}-> node environment therefore empty no objects present 

// function chai(){
//     console.log(this);
// }
// chai()

// const chai=function(){
//     let username="anant"
//     console.log(this.username);
// }
// chai()

const chai=() => {// arrow functions
    
    console.log(this);// empty object 
}
//chai()

// () => {} Arrow functions to give name add const name = () => {}

// const addTwo=(num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(5,7));

// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2)

// const addTwo=(num1,num2) => {username:"Anant"}//->undefined
 const addTwo=(num1,num2) => ({username:"Anant"})
console.log(addTwo(5,7));