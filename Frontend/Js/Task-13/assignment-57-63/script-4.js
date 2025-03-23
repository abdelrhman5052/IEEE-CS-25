function checkStatus(a, b, c) {
    let status = [a, b, c];
    for (let i = 0; i < status.length; i++) {
        typeof status[i] === 'string' ?
        a = status[i]
        : typeof status[i] === 'number' ?
        b = status[i]
        : typeof status[i] === 'boolean' ?
        c = status[i] 
        : ''
  
        status[i] === true ?
        c = 'Available For Hire'
        : status[i] === false ?
        c = 'Not Available For Hire'
        : ''
    }
  
    console.log(`Hello ${a}, Your Age Is ${b}, You Are ${c}`);
  }

  checkStatus("Osama", 38, true);
  checkStatus(38, "Osama", true);
  checkStatus(true, 38, "Osama");
  checkStatus(false, "Osama", 38); 




  console.log("##################################")



// method -2 
function checkStatus(a, b, c) {

    let status = [a, b, c], user, age, hire;
    for(let i = 0; i < status.length; i++) {
        typeof status[i] ==='string' ? user = status[i]
        : typeof status[i] ==='number' ? age = status[i]
        : typeof status[i] ==='boolean' ? hire = status[i] 
        :''
    }
    
    hire === true ? hire = 'You Are Available For Hire'
    : hire === false ? hire = 'You Are Not Available For Hire'
    :''
  
    console.log(`Hello ${user}, Your Age Is ${age}, ${hire}`);
    }
    
    checkStatus("Osama", 38, true);
    checkStatus(38, "Osama", true);
    checkStatus(true, 38, "Osama");
    checkStatus(false, "Osama", 38);  
    