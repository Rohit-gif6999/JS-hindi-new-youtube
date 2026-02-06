// objects

// const tinderUser = new object()       -> singleton

const tinderUser = {}   // non singleton

tinderUser.id = "123abc"
tinderUser.name = "Shampy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rohit",
            lastname: "Garg"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// merge of objects

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}
const obj3 = { 5:"a",6:"b"}

// const obj10 = Object.assign({},obj1,obj2,obj3)

const obj10 = {...obj1,...obj2,...obj3}
// console.log(obj10);

const users = [
    {
        id:1,
        email:"hr@gmail.com"
    },
    {
        id:1,
        email:"hr@gmail.com"
    },
    {
        id:1,
        email:"hr@gmail.com"
    },
    {
        id:1,
        email:"hr@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));  // only keys -> id,name,isLoggedin

console.log(Object.values(tinderUser)); // only values ->123abc,shampy,false
console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // this property is avaliable or not,  eg isLoggedIn -> true

