
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

let result = [];

// Using Object.entries() to iterate through key-value pairs of data
Object.entries(data).forEach(([country, states]) => {
    // Check if states is an object (nested object in data)
    if (typeof states === "object") {
        // Iterate through states (nested object)
        Object.entries(states).forEach(([state, cities]) => {
            // Log each state
            // console.log(cities);

            // Add cities to result if it's an array and not empty
            if (Array.isArray(cities) && cities.length > 0) {
                result.push(...cities);
            }
        });
    }
});

console.log(result); // Output: ['dallas', 'vadodara', 'rajkot', 'mumbai']


