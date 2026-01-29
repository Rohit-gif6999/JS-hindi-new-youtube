const score = 400
console.log(score);

const balance = new Number(100)  // specific 100 is number
console.log(balance)


console.log(balance.toString().length)

console.log(balance.toFixed(2))


const otherNumber = 123.8966        
console.log(otherNumber.toPrecision(5))   // roundoff show digit value which we give in precision


const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000 -> us style

console.log(hundreds.toLocaleString('en-IN')) // 10,00,000 -> indian style

// +++++++++++++++++++++++++++++++++++ Maths +++++++++


console.log(Math)
console.log(Math.abs(-45))   // abs convert -ve to +ve only
console.log(Math.round(4.1))   // roundoff
console.log(Math.ceil(4.1))   // upper value ->5 
console.log(Math.floor(4.9))   // lower value ->4

console.log(Math.min(4,3,6,8))  // min value
console.log(Math.max(4,3,6,8))  // max value

console.log(Math.random())  // value range 0-1
console.log(Math.random()*10)  // value 0 bhi ho skti hai
console.log((Math.random()*10)+1)  // +1 because value 0 na aye


console.log(Math.floor(Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+ min)
