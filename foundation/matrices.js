module.exports = {

    // in array M by N get M
    // ex in array  M by N where M=2 N=3 [ [1,2,3], [1,0,1]]
    // output is 2 
    getNumberOfRows: function(matrix) {
        if (!Array.isArray(matrix)) throw Error("not a matrix");
        if (!Array.isArray(matrix[0])) throw Error("not a matrix");
        return matrix.length;
    },

    // in array M by N get N
    // ex in array  M by N where M=2 N=3 [ [1,2,3], [1,0,1]]
    // output is 3  
    getNumberOfColumns: function(matrix) {
        if (!Array.isArray(matrix)) throw Error("not a matrix");
        if (!Array.isArray(matrix[0])) throw Error("not a matrix");

        return matrix[0].length;
    },

    //apply scalar function f to marix A 
    //and return matric B = fA
    //ex: f = x^2, A = {{1,2}, {2, 2}}
    //=> B  = {{1,4}, {4, 4}}
    applyScalarTransform: function(matrixA, transformFunc) {
        let res = [];
        matrixA.forEach(row => {
            res.push(row.slice().map((el) => transformFunc(el)));
        });
        return res;
    },

    //turns array of elements  in form of a11..aij..amn into array A[m][n]
    //example m=2, n=2:  2, 2, 1 (a11), 0 (a12), 1 (a21) , 3 (a22)
    // => [[1,0], [1,3]]
    createMatrix: function(m, n, ...elements) {
        if (m * n !== elements.length)
            throw Error(`not a rectangular matrix ${m} by ${n}`);
        if (m === 1)
            return [elements.slice(0, n)];
        let res = [elements.slice(0, n)];
        res.push(...this.createMatrix(m - 1, n, ...elements.slice(n)));
        return res;
    },

    //neatly ouputs M by N array to console 
    printMatrix: function(matrix) {
        if (matrix.length > 0) {
            console.log(`${'\t'+ matrix[0].join(',\t')}`);
            this.printMatrix(matrix.slice(1));
        }
        return ``;
    },


    //return result of A [m by k] * B [k by n]
    //=> matrix C [m by n]
    //example A [[1,2],[1,0]] by B[[1,0],[1,1]]
    //=> C [[1x1 + 2x1,1x0 + 2x1], [1x1 + 0x1, 1x0+0x1]]
    // [[3,2],[1,0]]   
    //https://en.wikipedia.org/wiki/Matrix_multiplication
    getMatrixProduct: function(matrixA, matrixB) {
        if (this.getNumberOfColumns(matrixA) !== this.getNumberOfRows(matrixB))
            throw Error("matrices' dimensions are incompatible for operation C = A x B");
        let result = [];

        for (let i = 1; i <= this.getNumberOfRows(matrixA); i++) {
            let row = [];
            for (let j = 1; j <= this.getNumberOfColumns(matrixB); j++) {
                row.push(this.getScalarProductOfVectors(this.getNthRow(matrixA, i), this.getNthColumn(matrixB, j)));
            }
            result.push(row);
        }

        return result;
    },

    //scalar product of vectors
    getScalarProductOfVectors: function(vectorA, vectorB) {
        if (vectorA.length !== vectorB.length)
            throw Error("can't get scalar product of vectors of different lengths ");

        if (vectorA.length === 1)
            return vectorA[0] * vectorB[0];

        let v1 = vectorA.slice();
        let v2 = vectorB.slice();

        return v1.pop() * v2.pop() + this.getScalarProductOfVectors(v1, v2);
    },

    //get row number N of matrix A
    // N starts from 1 to number of A's rows
    getNthRow: function(matrix, n) {
        if (!this.isMatrix(matrix))
            throw Error("first argument has to be a valid matrix");
        if (n > this.getNumberOfRows(matrix) || n < 1)
            throw Error("n has to be valid row number");

        return matrix[n - 1];
    },

    //get column number N of matrix A
    // N starts from 1 to number of A's columns
    getNthColumn: function(matrix, n) {
        if (!this.isMatrix(matrix))
            throw Error("first argument has to be a valid matrix");
        if (n > this.getNumberOfColumns(matrix) || n < 1)
            throw Error("n has to be valid column number");

        let res = [];
        matrix.forEach(row => {
            res.push(row[n - 1]);
        });
        return res;
    },

    // true if matrix can be represented as
    // two dimensional array: [[..],[..] ..]
    // otherwise - false
    isMatrix: function(matrix) {
        return Array.isArray(matrix) && Array.isArray(matrix[0])
    }
};