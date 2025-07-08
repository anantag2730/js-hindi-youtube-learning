class user{
    constructor(name,email,password){
        this.name=name;
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}
const anant= new user("anant", "anant@gm.com","abc");

console.log(anant.password);
console.log(anant.email);
// node classes_and_OOPS/getterSetter.js