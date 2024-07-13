// Var 
//declared
var firstName = "Rameshwar"

// re-declared
var firstName = "Jyoti"

// re-assign
firstName = "Piyush"
console.log(firstName)


// Let
let lastName = "Yadav"
// let lastName = "Sharma" // you can not re-declared
lastName = "Sharma"
console.log(lastName)


// Const
const age = 30
// const age =40; //you can not re-declaired
// age = 50 you can not re-assign
console.log(age)


// Scope
// var
if (true) {
    var city = "Jaipur"
}
console.log(city)

//let 
if(true){
    let city1 = "Jodhpur"
}
// console.log(city1) // block scope

//const 

if(true){
    let city2 = "Jaisalmer"
}
// console.log(city2) //block scope