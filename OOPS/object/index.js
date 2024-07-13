let person = {
    firstName: "Rameshwar",
    lastName: "Yadav",
    age: 30,
    city: "Jaipur",
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
}

console.log(person.fullName())
