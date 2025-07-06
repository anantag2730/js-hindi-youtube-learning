// Object Literals
const users ={
    username:"Anant",
    logInCount:8,
    isSignnedIn:true,

    getUserDetails:function(){
        // console.log("Got user details from database.");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());


function user(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this;
}
// const userOne=user("Anant",6,true);
// console.log(userOne);// ->Anant",6,true
// const userTwo=user("Javascript",12,false)
// console.log(userTwo);//->"Javascript",12,false
// console.log(userOne);//->"Javascript",12,false overwrite the values
// new keyword 

const userOne=new user("Anant",6,true);
const userTwo=new user("Javascript",12,false)
console.log(userTwo);
console.log(userOne);
// node classes_and_OOPS/notes.js