const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  ingredients.map((ingredient) => {
      const list = document.querySelector("#ingredients");
      const listItem = document.createElement("li");
      listItem.classList.add("item");
      listItem.textContent = ingredient;
      list.append(listItem);
      console.log(listItem);
  }
  )