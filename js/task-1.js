const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);
categories.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
})

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const headings = document.querySelectorAll("h2")
headings.forEach((el) => el.classList.add("header"))

let allElements = []
const items = document.querySelectorAll(".item")
items.forEach((el) => allElements.push(([...el.lastElementChild.children])))

for (const i of allElements) {
  i.forEach((el) => el.classList.add("text"))
  i.forEach ((el) => el.classList.add("window"))
}
