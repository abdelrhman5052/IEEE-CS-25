let index = 10;
let jump = 2;
let end4 = 0;

let i = index;
for (;;) {
    console.log(i);
    i -= jump;
    if (i <= jump) {
        break;
    }
}
