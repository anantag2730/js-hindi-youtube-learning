// node basic_01/08_dates.js

// let myDate= new Date()
// console.log(myDate);//2025-06-22T12:09:09.243Z
// console.log(myDate.toString());//Sun Jun 22 2025 12:09:09 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Jun 22 2025
// console.log(myDate.toISOString());//2025-06-22T12:09:09.243Z
// console.log(myDate.toJSON());//2025-06-22T12:09:09.243Z
// console.log(myDate.toLocaleDateString());//6/22/2025
// console.log(myDate.toLocaleString());//6/22/2025, 12:09:09 PM

// console.log(typeof myDate);// object 

// let myCreatedDate=new Date(2025, 0, 23)
// let myCreatedDate=new Date(2025, 0, 23,5,3)
// let myCreatedDate=new Date("2025-06-22")
// console.log(myCreatedDate);
// // console.log(myCreatedDate.toDateString());
// // console.log(myCreatedDate.toLocaleString());

// let timeStamp=Date.now()
// console.log(timeStamp);//in millisec from 1970
// console.log(myCreatedDate.getTime());


console.log(Date.now()/1000);// to seconds
console.log(Math.floor(Date.now()/1000));//to seconds

let newDate= new Date();
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));


