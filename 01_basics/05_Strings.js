const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount+"value");   old way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rohitgarg')

console.log(gameName[0])       // show key value pair

console.log(__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))  // 2 key value pai konsa letter hai

console.log(gameName.indexOf('t'))  // t ki key value kya h

const newString = gameName.substring(0,7) // 4 key value is not included in this
console.log(newString)

const anotherString = gameName.slice(-4,4)
console.log(anotherString)

// trim


const newStringOne = "  Rohit  "
console.log(newStringOne)
console.log(newStringOne.trim())

// replace

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace('%20','-'))