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

for (let i = 0; i < ingredients.length; i += 1) {
    const listItem = document.createElement("li");
    listItem.classList.add("item");
    listItem.textContent = ingredients[i];
    ingredientsList.push(listItem.outerHTML);
    console.log(ingredientsList);    
}
list.insertAdjacentHTML("beforeend", ingredientsList.join(""));





// ingredients.map((ingredient) => {
//         const listItem = document.createElement("li");
//         listItem.classList.add("item");
//         listItem.textContent = ingredient;
// ingredientsList.push(listItem.outerHTML);
//     })