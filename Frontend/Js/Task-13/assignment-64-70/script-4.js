function specialMix(...data) {
    let x = 0;
    let counter = 0;
    for(let i = 0; i < data.length; i++) {
        if(parseInt(data[i])) {
            counter += parseInt(data[i]);
        } else{
            x++;
        }
    }
    if(x == data.length && counter == 0) {
        counter = 'All Is Strings';
    }
    return counter;
}



// method -2
function specialMix(...data) {
    let x = 0;
    let counter = 0;
    for (let i = 0; i < data.length; i++) {
        x += isNaN(parseInt(data[i])) === true ? 0 : parseInt(data[i]);
        if (isNaN(parseInt(data[i])) === true) {
        ++counter;
        }
    }
    return counter === data.length ? `All Is Strings` : x;
}


console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings