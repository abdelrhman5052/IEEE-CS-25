
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let count = letter.length;
for (let i = --letter.length; i < friends.length; i++) {
    if(friends[i][--letter.length] === letter.toUpperCase()){
        continue;
    }
    else {
        console.log(`"${count} => ${friends[i]}"`)
        count++;
    }
}
