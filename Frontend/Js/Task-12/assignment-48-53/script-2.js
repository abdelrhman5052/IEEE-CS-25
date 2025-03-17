
let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i > end; i--) {
    if (i < start) {
        console.log(`${end}${i}`);
    } else {
        console.log(i);
    } 
    if (i === stop) break;
} 
