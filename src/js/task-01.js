const categoryLength = document.querySelectorAll("li.item");
console.log("Number of categories:", categoryLength.length);


const firstCategory = document.querySelector("h2");
console.log("Category: ", firstCategory.textContent);


const firstCategoryLength = document.querySelectorAll("li ul");
console.log("Elements: ", firstCategoryLength[0].children.length);



const secondCategory = document.querySelectorAll("#categories h2");
console.log("Category: ", secondCategory[1].textContent);

const secondCategoryLength = document.querySelectorAll("li ul");
console.log("Elements: ", secondCategoryLength[1].children.length);



const thirdCategory = document.querySelectorAll("#categories h2");
const thirdCategoryName = thirdCategory[2].textContent;
console.log("Category: ", thirdCategoryName);

const thirdCategoryLength = document.querySelectorAll("li ul");
console.log("Elements: ", thirdCategoryLength[2].children.length);
