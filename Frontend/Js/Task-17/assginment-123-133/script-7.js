
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

 
//  metod 1 
console.log([...numsOne, ...numsTwo] )

//  metod 2
console.log([numsOne, numsTwo].flat())

//  metod 3 
console.log(numsOne.concat(numsTwo))

console.log(Array.of(...numsOne,...numsTwo))



//  metod 4 
numsTwo. unshift(...numsOne)
console.log(numsTwo)