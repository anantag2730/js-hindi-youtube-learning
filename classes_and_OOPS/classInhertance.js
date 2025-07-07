// node classes_and_OOPS/classInhertance

class user{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is:${this.username}`);
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)// apne aap upar vale mein bhi update kar dega 
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course is added by ${this.username}.`);
    }
}
const user1=new user("anant");
console.log(user1);
user1.logMe();
const teacher1=new teacher("happy","happy.com","123");
console.log(teacher1.username);
user1.logMe();
teacher1.logMe()
teacher1.addCourse()

console.log(teacher1 instanceof teacher);
console.log(teacher1 instanceof user);