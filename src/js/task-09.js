const widgetEl = document.querySelector(".change-color");
console.log(widgetEl);
widgetEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
    const hexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const textColor = document.querySelector("span.color");
    textColor.textContent = hexColor;
    const bodyColor = document.querySelector("body");
    bodyColor.style.backgroundColor = hexColor;
}
