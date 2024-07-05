let person = {
    firstName: "Rameshwaar",
    lastName: "Yadav",
    age: 30,
    city: "Jaipur"
}

let objKey = Object.keys(person)
console.log(objKey)
for (const key of objKey) {
    console.log(person[key])
}