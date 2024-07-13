let sayHello = (name, city, age) => {
    return {
        name,
        city,
        age
    }
}

let data = sayHello("Rameshwar", "Jaipur", 30)
console.log(data)


let person = {
    firstName: "Rameshwar",
    lastName: "Yadav",
    // fullName:function(){
    //     return this.firstName+" "+this.lastName
    // }

    // fullName:()=>{
    //     return person.firstName+" "+person.lastName
    // }

    suportFunction: function () {
        // let fullName = () => {
        //     return this.firstName + " " + this.lastName
        // }
        // return fullName()

        let fullName = function(){
            return this.firstName + " " + this.lastName
        }
        // return fullName.call(person)
        // return fullName.apply(person)
        return fullName.bind(person)
    }
}

console.log(person.suportFunction())