class Car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        return `Car Is Running Now`;
    }
    stop(){
        return `Car Is Stopped`;
    }
}
let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Fiat", 2020, 300000);
let carThree = new Car("Lada", 2005, 50000);

  // Needed Output

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());
console.log(`Car One Name Is ${carTwo.n} And Model Is ${carTwo.m} And Price Is ${carTwo.p}`);
console.log(carTwo.stop());
console.log(`Car One Name Is ${carThree.n} And Model Is ${carThree.m} And Price Is ${carThree.p}`);
console.log(carThree.run());