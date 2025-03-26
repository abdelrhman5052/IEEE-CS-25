function squareDigits(n) {
	return Number(n.toString().split("").map((e) => e **2).join(""));
}