
function multiply (...nums) {
    let calc = 1;
    for(i = 0; i < nums.length; i++) {
      if (typeof nums[i] === 'string') {
        continue;
      }else {
        calc *= Math.trunc(nums[i]);
      }
    }
    console.log(calc);
  }
  


  console.log("##############################")
  
  // method -2 
  
  function multiply (...nums) {
    let calc = 1;
    for(i = 0; i < nums.length; i++) {
      if (typeof nums[i] === 'string') {
        continue;
      }else {
        calc *= parseInt(nums[i]);
      }
    }
    console.log(calc);
  }
  
  multiply(10, 20); // 200
  multiply("A", 10, 30); // 300
  multiply(100.5, 10, "B"); // 1000