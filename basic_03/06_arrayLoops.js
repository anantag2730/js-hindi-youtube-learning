// node basic_03/06_arrayLoops.js

const arr=[1,3,5,5,10,9,11]

for (const element of arr) {
    console.log(element);
    
}
// const name="anant agarwal"
// for (const element of name) {
//     console.log( element );
    
// }

// ++++++++++++++++++++++++++++++MAPS++++++++++++++

const map=new Map()
map.set("IN","INDIA")
map.set("USA","United State Of America")
map.set("SA","South Africa")
map.set("IN","INDIA")
console.log(map);

for (const [key,val] of map) {
    // console.log(key);
    // [ 'IN', 'INDIA' ]
    // [ 'USA', 'United State Of America' ]
    // [ 'SA', 'South Africa' ]

    console.log(key +" "+val);
}
/// not work for object forof not work for object 