let score="22"
let score2="22aba"
console.log(typeof score);//->string
console.log(typeof score2);//->string
let valueInNumber=Number(score)
console.log(typeof valueInNumber);//->number

let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2);//->number
console.log(valueInNumber2);//->Nan Not a number 


let score3=null
console.log(typeof score3);//->object
let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3);//->0
console.log(valueInNumber3);


// // node basic_01/03_dataConversions.js