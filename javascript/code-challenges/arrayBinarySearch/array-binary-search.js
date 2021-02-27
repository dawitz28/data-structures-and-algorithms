'use strict';

binarySearch([4,8,15,16,23,42], 15)
binarySearch([11,22,33,44,55,66,77], 90)

function binarySearch(array, key) {
    var min =0;
    var max = array.length -1;
    var mid = Math.floor((min + max)/2)
    while(array[mid] !== key && min <= max) {
        console.log(min, mid, max);
        if(key < array[mid])
        max = mid -1
        else min = mid + 1;
        mid = Math.floor((min + max) /2)
    }
    return array[mid] == key ? mid : -1;
    if(array[mid] == key) {
        return mid 
    }
    return -1;
}