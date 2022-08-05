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
    // console.log(list);

    const lastItem = document.createElement("li");
    lastItem.textContent = ingredient;
    // lastItem.class = "item";
    list.append(lastItem);

    
    console.log((lastItem));
  }
  )




