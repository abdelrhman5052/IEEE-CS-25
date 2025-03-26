function possibleBonus(a,b) {
    let change = b - a ;
    return change >= 1 && change <= 6 ; 
}

console.log(possibleBonus(3, 7));