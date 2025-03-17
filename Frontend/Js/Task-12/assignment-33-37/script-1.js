
//asim 1

let Num1 = 200; 


if (Num1 < 10) {
  console.log(`00${Num1}`);
}
else if (Num1 > 10 && Num1 < 100)
{
  console.log(`0${Num1}`);
}
else{
  console.log(Num1);
}


console.log("===================================================");
//asim 2

let Num4 = 9;
let str = "9";
let str2 = "20";

if (Num4 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (Num4 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (Num4 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}


console.log("===================================================");
//asim 3

let num5 = 10;
let num6 = 30;
let num7 = "30";

if (((num7 > num5) && (num7 !== num6)) && ((num7 > num5) && (num7 == num6)) && ((num7 !== num5) && (num7 !== num6))) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number" +
    "\n" +  "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number" +
    "\n" + "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}


console.log("===================================================");
//asim -4

let num8 = 11;
let num9 = 3;
let num11 = 11;
let num12 = 40;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num8 > num9) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num8 > num9 && num8 < num12) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num8 > num9 && num8 === num11) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num8 + num9 < num12) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num8 + num11 < num12) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num8 + num9 + num11 < num12) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num12 - (num8 + num11) + num9 === 21) {
  console.log("True");
} else {
  console.log("False");
}