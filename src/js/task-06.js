const inputEl = document.querySelector(`input#validation-input`);
const inputDataLength = inputEl.dataset.length;

inputEl.addEventListener("input", (event) => {
    const numberOfEnterSymbol = event.currentTarget.value.length;
    if (event) {
        inputEl.classList.add("valid");
        console.log(inputEl);
    }
    inputDataLength != numberOfEnterSymbol
        ? inputEl.classList.add("invalid")
        : inputEl.classList.remove("invalid");
});





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
