// node classes_and_OOPS/myClasses.js

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("anant","example@example.com","123");

console.log(chai.encryptPassword());
console.log(chai);
console.log(chai.changeUsername());

// BEHIND THE SCENE

function user2(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

user2.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
user2.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
const code=new user2("code","code@example.com","456");
console.log(code);
console.log(code.encryptPassword());
console.log(code.changeUsername());