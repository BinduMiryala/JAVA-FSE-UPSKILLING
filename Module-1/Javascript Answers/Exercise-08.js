// Task 8: Event Handling
document.querySelector("#registerBtn").onclick = () => {
    alert("Registered");
};

document.querySelector("#categorySelect").onchange = (e) => {
    console.log("Selected category:", e.target.value);
};

document.addEventListener("keydown", (e) => {
    console.log("Key pressed:", e.key);
});
