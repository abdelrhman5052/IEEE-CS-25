function createElementWithAttributes(tagName,cls,title,customAttribute,customAttributeValue,content) {
	const element = document.createElement(tagName);
	element.classList.add(cls);
	element.title = title;
	element.setAttribute(customAttribute, customAttributeValue);
	element.innerHTML = content;
	return element;
}

document.querySelector("p").remove();
const ourElement = document.querySelector("div.our-element");

ourElement.before(
	createElementWithAttributes("div","start","Start Element","data-value","Start","Start"));
    
ourElement.after(
	createElementWithAttributes("div","end","End Element","data-value",	"End","End"));
