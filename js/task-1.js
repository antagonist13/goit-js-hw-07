







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
const li = (allLi.push([...firstCategoryElements],[...secondCategoryElements], [...thirdCategoryElements]) )

for (const li of allLi) {
  li.forEach((el) => el.classList.add("text"))
  li.forEach ((el) => el.classList.add("window"))
}
