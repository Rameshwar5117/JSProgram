let sum = (name, ...number) => {
    let totalData = 0
    for (const value of number) {
        totalData += value
    }
    return { course: name, totalMarks: totalData }
}

let data = sum("LLB 1 Semester ", 55, 58, 45, 43)
console.log(`course name is ${data.course} and total marks is : ${data.totalMarks}`)