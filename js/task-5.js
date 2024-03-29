const body = document.querySelector("body")
const button = document.querySelector(".change-color")
const span = document.querySelector(".color")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = event => {
  const color = getRandomHexColor()
    body.style.backgroundColor = color
    span.textContent = color
};

button.addEventListener("click", handleClick)
button.classList.add("button")

const text = document.querySelector("p")
text.classList.add("text")