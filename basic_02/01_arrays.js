// node basic_02/01_arrays.js
let myArr=[1,3,2,5,36]

// const myArr3=new Array(1,2,3,"anant")

// console.log(myArr);

// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// console.log(myArr.indexOf(9));

// const myArr2 = myArr.join()
// console.log(myArr);
// console.log(myArr2);

// console.log(typeof myArr2);


//    slice and splice 
console.log("SLICE");

console.log("A ", myArr);

const myn1=myArr.slice(1,4)

console.log(myn1);

console.log("B ",myArr);

console.log("SPLICE");// includes end index also also remove that element from original
console.log("A ", myArr);

const myn2=myArr.splice(1,3)

console.log(myn1);

console.log("B ",myArr);
