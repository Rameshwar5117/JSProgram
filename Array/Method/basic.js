let number = [10, 20, 30, 40, 50]

//push method return new length of the array
let push = number.push(60,70,80)
console.log(push)

//it is used to add new element at the beigining of the array
// it return new length of the array
let unshift = number.unshift(5)
console.log(unshift)


// this method is used to remove last element of the array
// it is return remove element of array
let pop = number.pop()
console.log(pop)

// this method is used to remove beginning element of the array
// it is return remove element of the array
let shift = number.shift()
console.log(shift)

console.log(number.length)