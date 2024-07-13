
let data = {
    "students": [
        { "name": "Alice", "age": 25 },
        { "name": "Bob", "age": 30 },
        { "name": "Charlie", "age": 28 }
    ]
}

let stdName = []
for (const key in data) {
    for (const value of data[key]) {
        stdName.push(value.name)
    }
}


// console.log("stdName : ", stdName)

let totalStudent = []
for (const [key, value] of Object.entries(data)) {
    for (const student of value) {
        totalStudent.push(student.name)
    }
}

// console.log(totalStudent)

let result = Object.entries(data).map(([key, value]) => {
   return value.map((student) => student.name)
})

console.log(result.flat())
