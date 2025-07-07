// node classes_and_OOPS/staticProp.js

class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is:${this.username}`);
    }
    static createId(){// static keyword will prevent its use by instance 
        return `_${this.username}`
    }
}
const user1= new user("anant");
console.log(user1.createId());
