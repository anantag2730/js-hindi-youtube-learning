function setuser(username){
    this.username=username;
    console.log("called");
}
function createUser(username,email,password){
    setuser.call(this,username);// call pass the reference of its variable and everything in parent func and this keyword it is passed in it 
    this.email=email;
    this.password=password;
}
const chai=new createUser("anant27","example.com","123");
console.log(chai);

// node classes_and_OOPS/call.js