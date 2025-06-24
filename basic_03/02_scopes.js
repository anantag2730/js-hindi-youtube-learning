// node basic_03/02_scopes.js

var c=300
if(true)
{
    let a=10
    const b=20
    var c=30
}
// console.log(a);//->error
// console.log(b);//->error
console.log(c);// run and print even if c is not in scope
