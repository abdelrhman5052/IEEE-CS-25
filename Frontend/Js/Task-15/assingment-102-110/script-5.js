let div = document.querySelector("div");

let counter = setInterval(function () {
	div.innerHTML -= 1;
	if (div.innerHTML === "5")
		window.open(
			"https://elzero.org",
			"_blank",
			"width=500,height=600,,top=100,left=200"
		);
	if (div.innerHTML === "0") clearInterval(counter);
}, 1000);
