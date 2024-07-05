const person = {
    firstName: "Rameshwar",
    lastName: "Yadav",
    age: 30
}

let arr = Object.entries(person)
arr.map(([key, value])=>{
    console.log(key, value)
})

for (const [key, value] of arr) {
    console.log(key, value)
}

arr.forEach(([key, value])=>console.log(key, value))