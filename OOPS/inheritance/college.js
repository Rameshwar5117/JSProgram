class Operation {

    add(a, b) { return a + b }

    sub(a, b) { return a - b }

    mul(a, b) { return a * b }

    div(a, b) { return a / b }
}

class AddNumber extends Operation {
}

let addNumber = new AddNumber()
console.log(addNumber.add(30, 20))
console.log(addNumber.sub(30, 20))
console.log(addNumber.mul(30, 20))
console.log(addNumber.div(30, 20))