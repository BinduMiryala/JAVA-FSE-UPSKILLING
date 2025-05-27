// Task 12: AJAX & Fetch API
const userData = { name: "Alice", email: "alice@example.com" };

setTimeout(() => {
    fetch("https://api.mock.com/register", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
    })
    .then(res => res.json())
    .then(data => console.log("Success", data))
    .catch(err => console.error("Failure", err));
}, 2000);
