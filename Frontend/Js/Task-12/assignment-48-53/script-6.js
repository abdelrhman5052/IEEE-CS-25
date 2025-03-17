
let start4 = 0;
let swappedName = "elZerO";    //"ELzERo"

newArr = [];

for (let i = start4; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toLowerCase()) {
        newArr += swappedName[i].toUpperCase();
    } else {
        newArr += swappedName[i].toLowerCase();
    }
}
console.log(`"${newArr}"`);