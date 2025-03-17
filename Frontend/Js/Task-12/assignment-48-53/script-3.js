
let start3 = 1;
let end3 = 6;
let breaker = 2;


for (let i = start3; i <= end3; i++) {
    console.log(i) ;
    for (let j = breaker; j < end3; j += breaker) {
        console.log(`-- ${j}`) ;
    }
}

