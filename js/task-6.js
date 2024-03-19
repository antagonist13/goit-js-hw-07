const controls = document.querySelector("#controls")
const number = controls.firstElementChild
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector("#boxes")

let quantity = 0

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function newBoxCreating (event) {
   boxes.insertAdjacentHTML("beforeend", '<div class = "box"></div>')
}

createBtn.addEventListener("click", newBoxCreating)

