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
    },


    //get Cartesian product  of sets a1,a2,a3...
    //P:[a1],[a2],[a3].. -> [a1 x a2 x a3..]   
    getCartesianProductOfSets: function(...sets) {
        if (Array.isArray(sets[0]) && sets.length === 1)
            return sets[0];

        let cpy = sets.slice();
        let last = cpy.pop();
        return this.getCartesianProduct(this.getCartesianProductOfSets(...cpy), last);
    }

}