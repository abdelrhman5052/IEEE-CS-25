
let num2 = "10";

// Solution One
console.log(+num2 + +num2); // 20

// Solution Two
console.log(+num2++ + +num2++ - true); // 20

// Soultion Three
console.log(num2 + num2++ - true - true - true - true); // 20
