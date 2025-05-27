// Task 13: Debugging and Testing
console.log("Form submission started");
document.querySelector("form").onsubmit = function(e) {
    e.preventDefault();
    console.log("Prevented default");

    const formData = new FormData(e.target);
    fetch("https://api.mock.com/submit", {
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then(data => console.log("Submitted:", data))
    .catch(err => console.error("Error:", err));
};
