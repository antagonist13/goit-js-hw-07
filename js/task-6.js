const controls = document.querySelector("#controls")
const number = controls.firstElementChild
const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector("#boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function newBoxCreating(event) {
    let step = 0
    for (let i = 0; i < Number(number.value); i++) {
        step += 10
        boxes.insertAdjacentHTML("beforeend", '<div class = "box"></div>')
    }
}
createBtn.addEventListener("click", newBoxCreating)

