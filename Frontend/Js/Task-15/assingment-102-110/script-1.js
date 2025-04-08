let range = prompt("Print Numbers From - To");

function printNums(userInput) {
	let arr = userInput.split("-");
	let small = arr.sort((a, b) => a - b)[0].trim();
	let large = arr.sort((a, b) => b - a)[0].trim();
	for (let i = small; i <= large; i++) {
		let current = document.createElement("div");
		current.textContent = i;
		document.body.append(current);
	}
}

if (range != "") {
	printNums(range);
}
