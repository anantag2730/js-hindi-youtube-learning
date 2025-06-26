// node basic_03/07_objectITerations.js
// for in loop 
const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"Ruby",
    swift:"swift by apple"
}
//for in
for (const key in myObject) {
    console.log(key);// print keys 
}
// wrong 
// for (const [key,val] in myObject) {
//     console.log(key+" : "+val);
// }

for (const key in myObject) {
   console.log(key+" : "+myObject[key]);
}
// print indexs  
let myArr=["flash","batman","superman"]
for (const key in myArr) {
    console.log(myArr[key]);
}


const map=new Map()
map.set("IN","INDIA")
map.set("USA","United State Of America")
map.set("SA","South Africa")
map.set("IN","INDIA")
// console.log(map);
// not iterable 
for (const key in map) {
    console.log(key);
    
}