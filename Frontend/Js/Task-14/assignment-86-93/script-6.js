let submit = document.querySelector("[type = 'submit']");
let num = document.querySelector("[type = 'number']");
let word = document.querySelector("[type = 'text']");
let eltype = document.querySelector("select");
let form = document.forms;
let result = document.querySelector(".results");

form[0].onsubmit = function (el) {
  el.preventDefault();


  document.querySelectorAll(".newel").forEach((el) => el.remove());
  
  for (let i = 0; i < num.value; i++) {
    let newel = document.createElement(`${eltype.value}`);

    let text = document.createTextNode(`${word.value}`);
    newel.className = "newel";


    result.appendChild(newel);
    newel.appendChild(text);
  }
};
