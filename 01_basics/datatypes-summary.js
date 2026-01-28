// Primitive (call by value)

// Stack(Primitive)  , Heap(Non-Primitive)

// 7 types : string,number,Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isloggedin = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 45612236n





// Non Primitive(call by reference)

// arrays,functions,objects


const heros = ["shaktiman", "naagraj","doga"] // arrays

let myObj = {           // objects
   name: "rohit",
   age: 22,
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof object)