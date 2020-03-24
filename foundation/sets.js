module.exports = {

    // for sets A and B 
    // get Cartesian product  P:[A],[B] -> [A x B]   
    //https://en.wikipedia.org/wiki/Cartesian_product
    getCartesianProduct: function(vectorA, vectorB) {
        let res = [];
        vectorA.map(a => {
            vectorB.map(b => {
                res.push([a, b]);
            })
        });

        return res;
    }

}