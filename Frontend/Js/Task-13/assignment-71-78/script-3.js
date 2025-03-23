let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

let newArray = myArray.reduce(function(acc, cur) {
    return acc.concat(cur);
}, []).join("")

console.log(newArray)