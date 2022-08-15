const inputRange = document.querySelector("input#font-size-control");
console.log(inputRange);

inputRange.addEventListener("input", onInputElementEvent);

function onInputElementEvent(event) {
    const inputEl = event.currentTarget.value + 'px';

const body = document.querySelector("body");
body.insertAdjacentHTML("beforebegin", "<style></style>");

const listStyle = document.querySelector("#text");
listStyle.style.fontSize = inputEl;

}



