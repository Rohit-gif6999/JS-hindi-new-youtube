// singleton

// literals-> no singletons

// constructors-> singletons

// objects  literals


const mySym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "full name" :"Hitesh Chaudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email:  "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])


Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser) // object is freeze we can change values in objects


Jsuser.email = "hitesh@microseft.com" // no change because obj is freeze
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log('Hello JS user,${this.name}');
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());