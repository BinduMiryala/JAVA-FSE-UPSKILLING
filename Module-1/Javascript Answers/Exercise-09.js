// Task 9: Async JS, Promises, Async/Await
fetch("https://api.mock.com/events")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

async function fetchEvents() {
    document.getElementById("spinner").style.display = "block";
    try {
        const res = await fetch("https://api.mock.com/events");
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err);
    } finally {
        document.getElementById("spinner").style.display = "none";
    }
}
