const options = ["DEVELOPERS", "SHOWCASE", " SOLUTIONS", "COMPANY"];
const subArr = [
  "Install",
  "Tutorial",
  "Guide",
  "Documentation",
  "Forum",
  "Meetup"
];
const elementToAppendAt = document.getElementById("content");

function createList(array, subarray) {
  const ul = document.createElement("ul");
  ul.setAttribute("id", "dropdown");
  for (let i = 0; i < array.length; i++) {
    const button = createElement("button", i);
    ul.appendChild(button);
    for (let j = 0; j < subarray.length; j++) {
      const a = createSubElement("a", j);
      ul.firstChild.appendChild(a);
    }
  }
  elementToAppendAt.appendChild(ul);
}

function myFunc(elementToAdd) {
  //document.querySelectorAll(".link").classList.toggle(elementToAdd);
}

function hideMenu(elementToRemove) {
  //document.querySelectorAll(".link").classList.remove(elementToRemove);
}

function createSubElement(subElement, index) {
  const a = document.createElement(subElement);
  a.setAttribute("class", "link");
  a.appendChild(document.createTextNode(subArr[index]));
  return a;
}

function createElement(elementToCreate, index) {
  const element = document.createElement(elementToCreate);
  element.setAttribute("class", "item " + index);
  element.appendChild(document.createTextNode(options[index]));
  element.setAttribute("onclick", "myFunc('show')");
  element.setAttribute("onmouseleave", "hideMenu('show')");
  return element;
}

createList(options, subArr);
