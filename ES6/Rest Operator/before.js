function sumNumber(val1, val2, val3, val4, val5) {
    return val1 + val2 + val3 + val5 + val4
}

let value = sumNumber(10, 20, 30, 40, 50)
// console.log(value)

function sumUsingArg() {
    let sum = 0
    for (const i in arguments) {
        sum += arguments[i]
    }
    return sum
}
let result = sumUsingArg(10, 20, 30, 40, 50)
console.log(result)
