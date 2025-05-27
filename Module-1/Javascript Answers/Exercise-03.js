// Task 3: Conditionals, Loops, and Error Handling
const events = [
    { name: "Music Fest", date: "2025-07-01", seats: 20 },
    { name: "Art Show", date: "2024-12-01", seats: 0 },
];

events.forEach(event => {
    const eventDate = new Date(event.date);
    const today = new Date();
    if (eventDate > today && event.seats > 0) {
        console.log(`Upcoming Event: ${event.name}`);
    }
});

function register(event) {
    try {
        if (event.seats <= 0) throw new Error("No seats available");
        event.seats--;
        console.log("Registration successful");
    } catch (err) {
        console.error(err.message);
    }
}
