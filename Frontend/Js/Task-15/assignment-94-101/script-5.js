[...document.body.children].forEach((child) => {
	child.onclick = function () {
		console.log(`This Is ${this.tagName}`);
	};
});
