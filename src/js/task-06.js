const inputEl = document.querySelector(`input#validation-input`);
const inputDataLength = inputEl.dataset.length;

function invalidClass() {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
}

function validClass() {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
}

inputEl.addEventListener("input", (event) => {
    const numberOfEnterSymbol = event.currentTarget.value.length;
    inputDataLength != numberOfEnterSymbol ? invalidClass() : validClass();
});









// console.log(Number.isNaN(inputLength));

// if (numberOfEnterSymbol === inputDataLength) {
//     inputEl.classList.replace("valid", "invalid");}

// let inputTextLength = event.currentTarget.value.length;
// inputTextLengthValue = inputTextLength;

// inputEl.addEventListener("blur", () => {
//     if (inputTextLengthValue !== 0 && inputTextLengthValue !== 6) {
//         inputEl.classList.add("invalid");
//     } if (inputTextLengthValue === 6) {
//         inputEl.classList.remove("invalid");
//
//     } if (inputTextLengthValue === 0) {
//         inputEl.classList.remove("valid");
//         inputEl.classList.remove("invalid");
//     }
// });
