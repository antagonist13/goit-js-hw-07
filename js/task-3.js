const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    textOutput.textContent = (trimmedValue === "") ? "Anonymous" : trimmedValue;
});

const mainText = document.querySelector("h1")
mainText.classList.add("header")
textInput.classList.add("window", "text")




