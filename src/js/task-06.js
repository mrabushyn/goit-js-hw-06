const inputEl = document.querySelector(`input#validation-input`);
console.log(inputEl);
let inputTextLengthValue = 0;

inputEl.addEventListener("input", (event) => {
    if (event) {
        console.log(event.currentTarget.value.length);
        let inputTextLength = event.currentTarget.value.length;
        inputTextLengthValue = inputTextLength;
    }
});

inputEl.addEventListener("blur", () => {
    if (inputTextLengthValue !== 0 && inputTextLengthValue !== 6) {
        inputEl.classList.add("invalid");
    } if (inputTextLengthValue === 6) {
        inputEl.classList.remove("invalid");
        inputEl.classList.add("valid");
    } if (inputTextLengthValue === 0) {
        inputEl.classList.remove("valid");
        inputEl.classList.remove("invalid");
    }
});

