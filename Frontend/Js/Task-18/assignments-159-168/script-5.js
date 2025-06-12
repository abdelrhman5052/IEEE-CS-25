let start = performance.now();

for(let i = 0; i < 100000; i++){
    document.write(`<div>${i}</div>`)
}

let end = performance.now();

let duration = end - start;

console.log(`"Loop Took ${Math.trunc(duration)} Milliseconds."`);
