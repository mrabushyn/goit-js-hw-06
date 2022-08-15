const hexColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const divBoxes = document.querySelector("#boxes");

createBtn.addEventListener("click", (event) => {

function createBoxes(amount) {
  amount = inputEl.value;

    const divArray = [];

    let acc = 30;
    for (let i = 1; i <= amount; i += 1) {
        let divEl = document.createElement("div");
        divEl.style.display = "inline-flex"
        divEl.style.width = acc + 'px';
        divEl.style.height = acc + "px";
        divEl.style.paddingLeft = "1px";
        divEl.textContent = `Box  ${i} ${hexColor()}`;
        divEl.style.backgroundColor = hexColor();
        divEl.style.fontSize = acc/4 + "px";
        divEl.style.textAlign = "center";
        acc += 10;
        divArray.push(divEl);
        divBoxes.append(...divArray);
    }
}

createBoxes();

destroyBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
    divBoxes.innerHTML = "";
}
});