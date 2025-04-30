


let n1 = [10,30,10,20]
let n2 = [30, 20, 10]


//  metod 1
console.log(new Set(n2).keys().next().value * [...n1, ...n2].length);

//  metod 2
console.log(Math.max(...n1)* [...n1, ...n2].length);
