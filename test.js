var lib = require('./foundation/matrices');

let a = lib.createMatrix(3, 3, 1, 2, 0, 1, 0, 0, 0, 1, 0);
let b = lib.createMatrix(3, 3, 1, 0, 0, 1, 1, 0, 0, 1, 0);

lib.printMatrix(lib.getMatrixProduct(a, b));