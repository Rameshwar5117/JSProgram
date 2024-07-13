class Student {
    constructor(fname, lname, age, city) {
        this.firstName = fname
        this.lastName = lname
        this.age = age
        this.city = city
    }

    fullName() {
        return this.firstName + " " + this.lastName
    }

    fulllAddress(state, country) {
        return this.city + ", " + state + ", " + country
    }
}

let student = new Student("Rameshwar", "Yadav", 30, "Jaipur")
console.log(student)
console.log(student.fullName())
console.log(student.fulllAddress("Rajasthan", "India"))
