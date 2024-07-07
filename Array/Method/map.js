let students = [
    { name: "Ram", age: 29 },
    { name: "Gopal", age: 28 },
    { name: "Veer", age: 25 },
]

let data = students.map((valus) => {
    let data = { ...valus, city: "Ujjain", country: "India" }
    if (valus.name === "Veer") {
        data = { ...data, city: "Bhopal", state: "Madhya Pradesh" }
    } else if (valus.name === "Ram") {
        data = { ...data, city: "Jaipur", state: "Rajasthan" }
    }else{
        data = { ...data, state: "Madhya Pradesh" }
    }
    return data
})
console.log(data)