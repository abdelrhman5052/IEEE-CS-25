
window.onload = function () {
	setTimeout(createPopup, 5000);
};

function createPopup() {
	let popup = document.createElement("div");
	popup.id = "popup";
	let heading = document.createElement("h2");
	heading.textContent = "Welcome";
	let content = document.createElement("p");
	content.textContent = "Welcome To Elzero Web School";
	let closeBtn = document.createElement("button");
	closeBtn.id = "close-popup";
	closeBtn.textContent = "x";

	popup.style.cssText =
		"width: 500px; max-width: 100%; background-color: #eee; padding: 20px; text-align: center; position: relative; border: 1px solid #ccc; font-family: Arial; margin: 100px auto";
	closeBtn.style.cssText =
		"position: absolute; background-color: #fc0000; color: white; font-size: 1.5rem; top: 0; right: 0; transform: translate(50%, -50%); border-radius: 50%; border: none; width: 35px; height: 35px; cursor: pointer";

	popup.append(heading, content, closeBtn);
	document.body.append(popup);
}

document.addEventListener("click", function (e) {
	if (!e.target.matches("#close-popup")) return;
	e.target.parentElement.remove();
});
