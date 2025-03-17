
let start5 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(i = ++start5; i < mix.length; i++) {
    if (typeof mix[i] === "string") {
        continue;
    }
    console.log(mix[i]);
}