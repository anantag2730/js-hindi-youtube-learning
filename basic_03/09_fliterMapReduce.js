// node basic_03/09_fliterMapReduce.js

// const coding=["javascript","c++","java","python","c"]

// const value=coding.forEach(function (item){
//     console.log(item);
//     return item 
// })

// console.log(value);// -> undefined

const myNums=[1,2,3,4,5,6,7,8,9,10,12]

let newNums=myNums.filter((num) => num > 6)
console.log(newNums);

newNums=myNums.filter((num) => {
    //num > 6// return []
    return num>6;
})
console.log(newNums);


//*************************************************MAP************************

const Nums=[1,2,3,4,5,6,7,8,9,10,12]

let nwNums=myNums.map((num) => num + 6)
console.log(nwNums);

nwNums=Nums
            .map((num) => num+10)
            .map((num) => num*3)
            .filter((num) => num%6==0)
console.log(nwNums);

//*************************REDUCE ******************************************** */

let myArr=[1,2,3,5,6,7,8,9,22,11]
let initialValue=5;
let newArr=myArr.reduce((accumulator,num) => num+accumulator,initialValue)
console.log(newArr);

newArr=myArr.reduce( function (acc,currentValue) {
    console.log(`acc: ${acc} currentValue: ${currentValue}`);
    return acc+currentValue
} , 2 )
console.log(newArr);

