let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();

// Or:
allArrs = arr1.concat(arr2).sort().slice(-(arr1.length)).join('').toLowerCase();

console.log(allArrs); // fxy