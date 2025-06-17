let request = new XMLHttpRequest();
request.open('GET', 'https://codepen.io/abdelrhman-elmasry/pen/YzaMpxL.js');
request.send();
request.onreadystatechange = function () {
  if (this.status === 200 && this.readyState === 4 && this.response) {
    console.log('JSON Object Content Here');
  }
  request.onload = () => {
    console.log('Data Loaded');
  };
};