let request = new XMLHttpRequest();
request.open('GET', 'https://codepen.io/abdelrhman-elmasry/pen/YzaMpxL.js');
request.send();
request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4) {
    let mainData = JSON.parse(request.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = 'all';
    }
    
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    
    console.log(updatedData);
  }
};
