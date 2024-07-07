let students = [
    { name: "Ram", age: 30, city: "Jaipur" },
    { name: "Jivan", age: 32, city: "Jaipur" },
    { name: "Ramkishor", age: 34, city: "Jaipur" }
]

let some1 = students.some((student)=>student.age>33)
console.log(some1)

let some2 = students.some((student)=>student.name.charAt(0)==="R")
console.log(some2)

let some3 = students.some((student)=>student.name.charAt(0)!=="R")
console.log(some3)