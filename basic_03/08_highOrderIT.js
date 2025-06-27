const coding=["javascript","c++","java","python","c"]
function printMe(item){
    console.log(item.toUpperCase());
    
}
coding.forEach(printMe)

 coding.forEach(function (item,index,arr){
    console.log(item, index, arr);
 })