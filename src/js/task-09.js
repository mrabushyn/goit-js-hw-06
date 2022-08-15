const widgetEl = document.querySelector(".change-color");
widgetEl.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
    const hexColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const textColor = document.querySelector("span.color");
    textColor.textContent = hexColor;
    const bodyBgColor = document.querySelector("body");
    bodyBgColor.style.backgroundColor = hexColor;
}
