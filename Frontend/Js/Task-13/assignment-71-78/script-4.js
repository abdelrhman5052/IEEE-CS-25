
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let array = numsAndStrings.filter(function(e) {
    return !isNaN(parseInt(e)) ? e : ""
}).map(function(e) {
    return -e
})

console.log(array)