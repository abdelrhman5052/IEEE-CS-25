function sayHello(theName, theGender) {
    if (theGender === 'Male') {
        console.log(`"Hello Mr ${theName}"`);
    } else if (theGender === 'Female') {
        console.log(`"Hello Miss ${theName}"`);
    } else {
        console.log(`"Hello ${theName}"`)
    }
  }


console.log("##############################")

//seloution -2

function sayHello(theName, theGender ='') {
    if (theGender === 'Male') {
        theGender = 'Mr';
    } else if (theGender === 'Female') {
        theGender = 'Miss';
    } 
    console.log(`Hello ${theGender} ${theName}`)
  }  
  
  sayHello("Osama", "Male"); 
  sayHello("Eman", "Female"); 
  sayHello("Sameh"); 