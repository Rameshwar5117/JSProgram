function Counter() {
    let count = 0
    return {
        increament: function () {
            return count++
        },
        decreament: function () {
            if (count > 0) {
                count--
            }
            return count
        },
        getCount: function () {
            return count
        }
    }
}

let counter = Counter()
counter.increament()
console.log(counter.getCount())
counter.decreament()
counter.decreament()
console.log(counter.getCount())
