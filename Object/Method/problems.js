
let data = {
    america: {
        texas: ['dallas'],
        florida: []
    },
    spain: {},
    india: {
        gujarat: ['vadodara', 'rajkot'],
        maharashtra: ['mumbai'],
        odisha: []
    }
};

// Output: ['dallas', 'vadodara', 'rajkot', 'mumbai']
let result = []
for (const country in data) {
    for (const state in data[country]) {
        for (const city of data[country][state]) {
            result.push(city)
        }
    }
}
console.log(result)

let result1 = []
for (const country in data) {
    for (const state in data[country]) {
        result1.push(...data[country][state])
    }
}
console.log(result1)