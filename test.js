var matrices = require('./foundation/matrices');
var sets = require('./foundation/sets');

let a = matrices.createMatrix(3, 3, 1, 2, 0, 1, 0, 0, 0, 1, 0);
let b = matrices.createMatrix(3, 3, 1, 0, 0, 1, 1, 0, 0, 1, 0);
//matrix product
matrices.printMatrix(matrices.getMatrixProduct(a, b));

//linear transformation
let e = matrices.createMatrix(3, 3, 1, 0, 0, 0, 1, 0, 0, 0, 1);
console.log(matrices.getTransformedVector([1, 2, 1], e));

//cartesian product
console.log(sets.getCartesianProduct([1, 2, 1], [
    [1, 0], 2, 3
]));