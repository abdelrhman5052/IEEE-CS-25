
let div = document.querySelector("div");

setInterval(() => {
	div.innerHTML -= 1;
	if (div.innerHTML === "0") location.assign("https://elzero.org");
}, 1000);