const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const list = document.querySelector("#ingredients");
const ingredientsList = [];
ingredients.map((ingredient) => {
        const listItem = document.createElement("li");
        listItem.classList.add("item");
        listItem.textContent = ingredient;
        ingredientsList.push(listItem.outerHTML);
    })
list.insertAdjacentHTML("beforeend", ingredientsList.join(""));
