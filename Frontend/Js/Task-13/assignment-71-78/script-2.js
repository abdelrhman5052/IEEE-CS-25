let myString = "EElllzzzzzzzeroo";          // Elzero

let newString = myString.split('').filter(function( e,index, arr) {
    return arr[index] !== arr[index - 1];
}).join('')

console.log(newString);