const outputValue = document.querySelector("span#name-output");
console.log(outputValue);

const outputText = outputValue.textContent;

const inputValue = document.querySelector("input#name-input");
console.log(inputValue.placeholder);

inputValue.addEventListener("input", (event) => {
    if (event) {
        outputValue.textContent = event.currentTarget.value;
    }
    if (outputValue.textContent === "") {
        outputValue.textContent = outputText;
    }
});
