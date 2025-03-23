let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let add = mix.map((e) => {
 
    return isNaN(parseInt(e)) ? e : ""

}
) .reduce((curr, acc)  => {
   return curr + acc
})


console.log(add);

// Elzero