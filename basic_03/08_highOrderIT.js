// node basic_03/08_highOrderIT.js

const coding=["javascript","c++","pyhton","java"]

 coding.forEach(function (item){
    console.log(item.toUpperCase());
    
 })
coding.forEach( (item) =>{
   console.log(item.toUpperCase());
    
})
function printMe(item){
    console.log(item.toUpperCase());
    
}
coding.forEach(printMe)

 coding.forEach(function (item,index,arr){
    console.log(item, index, arr);
 })