// Method One
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let two = { property: "Method Two" };
let objMethodTwo = Object.create(two);
console.log(objMethodTwo.property); // "Method Two"

// // Method Three
let three = { property: "Method Three" };
let objMethodThree = Object.assign({}, three);
console.log(objMethodThree.property); // "Method Three"

// // Method Four
let objMethodFour = new Object({ property: "Method Four" });
console.log(objMethodFour.property); // "Method Four"
