function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    this.score++;// this batane ne k liye ki jis ne bulaya hai usski hi score increase karna
}
createUser.prototype.printMe=function(){
    console.log(`${this.username} score is ${this.score}.`);
}
const chai=new createUser("chai",250);// bina new hum ne jo funtioon banaye hai hum usse access nahi kar sakte
const code=new createUser("code",50);
chai.printMe();
code.increment();
code.printMe();
// node classes_and_OOPS/Object.js

