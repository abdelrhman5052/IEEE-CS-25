
let resalt = 0;

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];

 

let copy = function (arr) {
  
 arr.sort().forEach(function (e) {

  if (typeof(e) === "number") {

    resalt++
   }  

  arr.copyWithin(0,resalt,resalt*2)

 }) 
  return arr;
}


 console.log(copy(chars)) 
 console.log(copy(chars2)) 
 console.log(copy(chars3)) 


