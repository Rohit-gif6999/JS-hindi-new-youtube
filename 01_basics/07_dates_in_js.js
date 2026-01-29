// dates

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleTimeString());

let myCreateDate = new Date(2023 ,0,23)  // 0->1 in string 0-> january
// console.log(myCreateDate)                // array mai change hai
// console.log(myCreateDate.toLocaleDateString())


let myCreateDate1 = new Date(2023 ,0,23,5,3)   
// console.log(myCreateDate1.toLocaleTimeString())


let myCreateDate12 = new Date("01-01-2002") // DD-MM-YYYY string mai same hai 
// console.log(myCreateDate12.toLocaleDateString())


// Time

let myTimeStamp = Date.now()
// console.log(myTimeStamp)    // show from 1/1/1970  in miliseonds

// console.log(myCreateDate12.getTime()) // date which i create 1-1-2002

console.log(Math.round(myTimeStamp/1000))  // time milisec->sec

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())


newDate.toLocaleString('default',{
    weekday:"long"
})
