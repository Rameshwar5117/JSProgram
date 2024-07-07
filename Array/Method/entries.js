let letter = ['a', 'b', 'c', 'd']

let entries = letter.entries()

console.log(entries.next())
console.log(entries.next())
console.log(entries.next())
console.log(entries.next())
console.log(entries.next())


// for (const [key,value,st] of entries) {
//     console.log(key, value,st)
// }


let students = { name: "Ram", age: 30, city: "Jaipur" }

let entries1 = Object.entries(students)

for (const [key,value] of entries1) {
    console.log(key,value)
}