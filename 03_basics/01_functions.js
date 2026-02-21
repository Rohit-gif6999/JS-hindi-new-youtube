// functions



function sayMyName()
{
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("I");
    console.log("T");

}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
    
// }

// addTwoNumbers(6,9)

function addTwoNumbers(num1,num2)
{
// let result  = num1+num2
// return result
return num1+num2
}

const result = addTwoNumbers(6,9)
// console.log("result: ",result);

function loginUserMessage(username)
{
    return `${username} just logged in`
}
console.log(loginUserMessage("rohit"))
