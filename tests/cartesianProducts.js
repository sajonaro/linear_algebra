var sets = require('../foundation/sets');
console.log(sets.getCartesianProduct([1, 2, 1], [
    [1, 0], 2, 3
]));

console.log(sets.getCartesianProductOfSets([1, 2, 1]));

console.log(sets.getCartesianProduct([1, 2, 1], [
    [1, 0], 2, 3
]));

console.log(sets.getCartesianProduct([1, 2, 3], [4, 5, 6]));

console.log(sets.getCartesianProductOfSets([1, 2, 3], [4, 5, 6], [7, 8, 9]));