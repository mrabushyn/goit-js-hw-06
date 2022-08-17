const information = () => {
    const categoryName = document.querySelectorAll("li.item");
    // const categoryLength = document.querySelectorAll("li.item ul");

    console.log("Number of categories:", categoryName.length);
    
    for (let i = 0; i < categoryName.length; i += 1) {
        console.log("Category:", categoryName[i].firstChild.nextSibling.textContent);
        console.log("Elements: ", categoryName[i].children[1].children.length);
    }
};
information();
