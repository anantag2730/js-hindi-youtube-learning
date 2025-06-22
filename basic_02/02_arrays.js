// node basic_02/02_arrays.js
let marvel_heros=["ironMan","thor","hulk"]
let dc_heros=["batman","superman","flash"]

// marvel_heros.push(dc_heros)//[ 'ironMan', 'thor', 'hulk', [ 'batman', 'superman', 'flash' ] ]

let allHeros=marvel_heros.concat(dc_heros)//[ 'ironMan', 'thor', 'hulk', 'batman', 'superman', 'flash' ]
console.log(allHeros);

// spreading
let all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

let anotherArr=[1,2,36,8,9,[2,3,6,1,2],[2,[66,22]]]
console.log(anotherArr);
let real_anotherArr=anotherArr.flat(Infinity)//flat(depth->kah tak dekhu)
console.log(real_anotherArr);

console.log(Array.isArray("Anant"));
console.log(Array.from("Anant"));
console.log(Array.from({name:"Anant"}));// very very interesting for interview

console.log(Array.isArray(marvel_heros));

let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3));
