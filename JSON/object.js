let person = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 30,
    "isStudent": false,
    "address": {
        "street": "123 Main St",
        "city": "Anytown"
    },
    "skills": ["JavaScript", "HTML", "CSS"]
}

function fullName(){
    return this.firstName+" "+this.lastName
}

let name = fullName.call(person)
console.log(name)
