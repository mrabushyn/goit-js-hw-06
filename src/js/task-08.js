const form = document.querySelector(".login-form");
console.log(form);
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    
    const {
        elements: { email, password },
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("All fields must be filled");
    }
    
    if (email.value !== "" && password.value !== "") {
        const dataObj = `{${email.name} : ${email.value}, ${password.name} : ${password.value}}`;
        console.log(dataObj);
    }
    event.currentTarget.reset();
}
