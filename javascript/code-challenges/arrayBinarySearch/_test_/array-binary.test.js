'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js')

describe('test array-binary-search', () => {
    it('should return index of the array if matched the search key'() => {
        const binarySearch = arrayBinarySearch([4, 8, 15, 16, 23, 42], 15);
        expect(binarySearch).toEqual(2);
    })
});

describe('test array-binary-search',()=>{
    it('should return -1 if the key search not found',()=>{
        let binarySearch = arrayBinarySearch([15,30,45,60,75,90],106);
        expect(binarySearch).toEqual(-1);

    });
});





