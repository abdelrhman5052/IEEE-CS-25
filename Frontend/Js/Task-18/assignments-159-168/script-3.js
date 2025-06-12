let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateThree = new Date();

dateThree.setDate(0);

console.log(dateThree);
console.log(`"Previous Month Is ${months[dateThree.getMonth()]} And Last Day Is ${dateThree.getDate()}"`);
