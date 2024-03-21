const categories = document.querySelectorAll(".item")
console.log(`Number of categories: ${categories.length}`);
console.log(`Category: ${categories[0].firstElementChild.textContent}`);
console.log(`Elements: ${categories[0].lastElementChild.children.length}`);

console.log(`Category: ${categories[1].firstElementChild.textContent}`);
console.log(`Elements: ${categories[1].lastElementChild.children.length}`);

console.log(`Category: ${categories[2].firstElementChild.textContent}`);
console.log(`Elements: ${categories[2].lastElementChild.children.length}`);

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

const headings = document.querySelectorAll("h2")
headings.forEach((el) => el.classList.add("header"))

let allLi = []
const li = (allLi.push([...categories[0].lastElementChild.children],[...categories[1].lastElementChild.children], [...categories[2].lastElementChild.children]) )

for (const li of allLi) {
  li.forEach((el) => el.classList.add("text"))
  li.forEach ((el) => el.classList.add("window"))
}
