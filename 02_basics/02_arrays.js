const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)   // array k andhar array 
// console.log(marvel_heros);  // 4 elements in array


// console.log(marvel_heros[3][1])
// const allHeros = marvel_heros.concat(dc_heros)       //  concat merge in single array
// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]  // spread
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)  // flay convert it into single array
console.log(real_another_array);


console.log(Array.isArray("Rohit"))
console.log(Array.from("Rohit"))
console.log(Array.from({name:"Rohit"})) // interesting o\p->empty array []  can,t convert into array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

