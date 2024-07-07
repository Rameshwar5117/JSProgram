// In summary, Object.assign() is a versatile method in JavaScript for 
// copying and merging properties from multiple source objects into a target object, 
// facilitating efficient data manipulation and object creation.

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);
console.log(result);
console.log(target);
