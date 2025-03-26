function add(arr) {
return arr.reduce(function(acc, cur) {
  return acc + Math.abs(cur);
} , 0)
}

console.log(add([2, -1, 4, 8, 10])); // 25