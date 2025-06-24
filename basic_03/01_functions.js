// node basic_03/01_functions.js

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
    
// }
// addTwoNumbers(5,7)
// addTwoNumbers(5,"a")
// addTwoNumbers(5,"7")
// addTwoNumbers(5,null)
function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;
}
const result=addTwoNumbers(5,8)
console.log("Result: ",result);//-> undefined if there is no return statement

function LoggedInUserMeassage(username ="anant"){
    if(username===undefined)
    {
        console.log("Please enter the username.");
        return
        
    }
    return `${username} just logged in.`
}

let message=LoggedInUserMeassage("Anant")
console.log(message);
console.log(LoggedInUserMeassage());// undefined just log in.

// when we dont know about the number of arguments 
function calculateCartPrice(...num1){//...->rest operator
    return num1
}

console.log(calculateCartPrice(2));//[2]
console.log(calculateCartPrice(200,300,500));//->[200,300,500]

const user={
    username:"Anant",
    price:"free"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username:"Hiten",
    price:"399"
})