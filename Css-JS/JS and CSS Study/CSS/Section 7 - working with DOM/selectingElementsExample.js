const ul = document.querySelector("ul")

const selectionOfChildElementsNodesBasedOnHTMLTags = ul.children
const selectionOfChildNodesIncludingTextNodesLikeEmptySpace = ul.childNodes

const selectingTheFirstChildNodeBasedOnHTMLTag = ul.firstElementChild
const selectingTheFirstChildNode = ul.firstChild


const selectingTheLastChildNodeBasedOnHTMLTag = ul.lastElementChild
const selectingTheLastChildNode = ul.lastChild

console.log(selectionOfChildElementsNodesBasedOnHTMLTags)
console.log(selectionOfChildNodesIncludingTextNodesLikeEmptySpace)

console.log(selectingTheFirstChildNodeBasedOnHTMLTag)
console.log(selectingTheLastChildNodeBasedOnHTMLTag)

console.log(selectingTheFirstChildNode)
console.log(selectingTheLastChildNode)



const li = document.querySelector("li")

const selectingParentElementUsingParentElementMethod = li.parentElement
const selectingParentElementUsingParentNodeMethod = li.parentNode
const selectingAncestorUsingClosestMethod = li.closest("body")

console.log(selectingParentElementUsingParentElementMethod)
console.log(selectingParentElementUsingParentNodeMethod)
console.log(selectingAncestorUsingClosestMethod)


const ulToNaviagetTowardsSiblings = li.parentElement
const selectingPreviousSibling = ulToNaviagetTowardsSiblings.previousElementSibling
const selectingPreviousSiblingNode = ulToNaviagetTowardsSiblings.previousSibling
const selectingTheNextSibling = ulToNaviagetTowardsSiblings.nextElementSibling

console.log(selectingPreviousSibling)
console.log(selectingPreviousSiblingNode)
console.log(selectingTheNextSibling)


const section = document.querySelector("section")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    // if (section.className === "bg-red visible") {
    //     section.className = "bg-red invisible"; 
    // } else {
    //     section.className = "bg-red visible";
    // }
    section.classList.toggle("invisible")
})

// section.style.backgroundColor = "blue";


