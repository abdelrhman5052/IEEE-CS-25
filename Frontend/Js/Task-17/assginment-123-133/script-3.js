
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
  
  myInfo = new Map()
  .set(Object.keys(myInfo)[0], myInfo.username)
  .set(Object.keys(myInfo)[1], myInfo.role)
  .set(Object.keys(myInfo)[2], myInfo.country)
  
  console.log(myInfo)
  
  console.log(myInfo.size)
  
  console.log(myInfo.has("role"))
  