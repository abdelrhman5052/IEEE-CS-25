let Name=document.querySelector("#name");
let age=document.querySelector("#age");
let job=document.querySelector("#job");
let number=document.querySelector("#number");

Name.oninput=function(){
window.sessionStorage.setItem("name",Name.value);
}
age.oninput=function(){
window.sessionStorage.setItem("age",age.value);
}
job.oninput=function(){
window.sessionStorage.setItem("job",job.value);
}
number.onchange=function(){
window.sessionStorage.setItem("number",number.value);
}

Name.value=window.sessionStorage.getItem("name");
age.value=window.sessionStorage.getItem("age");
job.value=window.sessionStorage.getItem("job");
number.value=window.sessionStorage.getItem("number");