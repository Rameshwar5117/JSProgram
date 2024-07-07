let students = [
    { name: "Ram", age: 30, city: "Jaipur" },
    { name: "Royal", age: 32, city: "Jaipur" },
    { name: "Riyan", age: 34, city: "Jaipur" }
]

let value = students.every((student) => student.city == "Jaipur")
console.log(value)

let value1 = students.every((student) => student.age >= 32)
console.log(value1)

let value2 = students.every((student) => student.name.charAt(0)==="R")
console.log(value2)
