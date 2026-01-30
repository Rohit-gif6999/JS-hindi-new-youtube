// arrays


const myArr = [0,1,2,3,4,5]
console.log(myArr[1]);

const myHeros = ["Ram","Sham"]
const myArr2 = new Array(1,2,3,4,5)

// Array Methods
myArr.push(6)       // push -> insert new element at last 
myArr.push(7)       // push -> insert new element at last 
console.log(myArr)

myArr.pop()        // ppop-> remove last element from array
console.log(myArr)

myArr.unshift(9)   // insert value as a  first element of array
console.log(myArr)

myArr.shift()         // delete first element from array
// console.log(myArr)  

// console.log(myArr.includes(9)) 

// console.log(myArr.includes(3)) 
// console.log(myArr.indexOf(3)) 

// const newArr = myArr.join()
// console.log(myArr)
// console.log(typeof newArr)

// slice , splice


console.log("A ",myArr)

const myn1 = myArr.slice(1,3)  // slice -? original array is safe
console.log(myn1)             // slice does not manipulate original array
console.log("B ",myArr)

const myn2 = myArr.splice(1,3)   // splice-> cuts the original array
console.log("C ",myArr)          // manipulayes original array
console.log(myn2)









