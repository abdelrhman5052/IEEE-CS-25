
let nums = [2, 12, 11, 5, 10, 1, 99];     // 500

let newNums = nums.reduce(function(acc, cur) {
    return cur % 2 === 0 ? acc * cur : acc + cur;
}, 1)

console.log(newNums);