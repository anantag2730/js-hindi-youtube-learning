const promiseOne= new Promise(function(resolve,reject){
    // Do an Ascyn Task
    // DB calls, crptography
    setTimeout(function(){
        console.log("Async Task completed.");
        resolve();// now then function is called
    },1000)
});
promiseOne.then(function(){
    console.log("Promise consumed");
})// direct connection with resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Ascyn 2 resolved.");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"anant27" , email:"anant@example.com"})
    },1000);
});

promiseThree.then(function(user){
    console.log(user);
    
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"anant27" , password:"123"})
        }
        else
            reject("Something went wrong.")
    },1000);
});

promiseFour
.then((user) => {
    console.log(user);
    console.log(user.username);
    return user.username;
})
.then(function(username){
    console.log(username);
})
.catch(function(errorMessage){// to handle reject 
    console.log(errorMessage);
})
.finally(() => console.log('Promise is either resolved or rejected.'))// indicate either of the operation is done and code is run successfully


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"javascript" , password:"123"})
        }
        else
            reject("Something in JS went wrong.")
    },1000);
});
// console.log(promiseFive);
// cannot candle error for erroe use catch 
async function consumePromiseFive() {
    try {
        const response=await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()
// node Advance_01/promises.js

// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users');//string type
//         // console.log(response);
//         const data=await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",e);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((responseInJson) => console.log(responseInJson))
.catch((error) => console.log("E: ",error))