let person = {
    firstName: "Rameshwar",
    lastName: "Yadav",
    age: 30,
    city: "Jaipur"
}

let objValue = Object.values(person)
for (const value of objValue) {
    console.log(value)
}

objValue.forEach(value=>(
    console.log(value)    
))

const data =  objValue.map((value)=>{
    return value + "!";
})

console.log(data)