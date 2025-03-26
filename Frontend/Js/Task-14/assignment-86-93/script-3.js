document.getElementsByTagName("input")[0].oninput = function () {
  document.getElementsByClassName("result")[0].innerHTML = `${
    document.getElementsByTagName("input")[0].value} 
      USD Dollar = ${( document.getElementsByTagName("input")[0].value * 50).toFixed(2)} 
         Egyptian Pound`;};
 