let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let arr=[...arr3,...arr1] 
let [,a,b,c,,]=arr;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);