# linear_algebra
this repository contains simple code examples in javascript, exploring both syntax and capabilities of javascrpt ES6, as well as fundamentals of linear algebra (matrices, cartesian products, vectors)

# nodejs
# ES6
# JavaScript fundamentals

 to run examples in node js 

 var lib = require('./foundation/matrices');

 let a = lib.createMatrix(3, 3, 1, 2, 0, 1, 0, 0, 0, 1, 0);
 let b = lib.createMatrix(3, 3, 1, 0, 0, 1, 1, 0, 0, 1, 0);

 lib.printMatrix(lib.getMatrixProduct(a, b));
