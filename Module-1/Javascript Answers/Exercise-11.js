// Task 11: Working with Forms
document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const { name, email, eventSelect } = event.target.elements;
    if (!name.value || !email.value) {
        document.querySelector("#error").textContent = "All fields required";
        return;
    }
    console.log("Registered:", name.value, email.value, eventSelect.value);
};
