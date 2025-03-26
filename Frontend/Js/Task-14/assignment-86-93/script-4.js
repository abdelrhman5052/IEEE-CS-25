let One=document.getElementsByClassName("one")[0];
let Two=document.getElementsByClassName("two")[0];



One.title=One.className;
One.textContent=`${One.className[0].toUpperCase()}${One.className.substring(1)}`;  
Two.title=Two.className;

Two.textContent=`${Two.className[0].toUpperCase()}${Two.className.substring(1)} ${Two.attributes.length}`;