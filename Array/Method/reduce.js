let number = [10, 20, 30, 40, 50]

let data = number.reduce((accumulator, current, index,arr) => {
    console.log(index,accumulator, current, arr)
    return accumulator + current
},0)

console.log(data)