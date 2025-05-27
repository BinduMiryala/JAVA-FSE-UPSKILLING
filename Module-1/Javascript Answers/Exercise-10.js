// Task 10: Modern JavaScript Features
const events = [{ name: "Hackathon", date: "2025-07-01", seats: 30 }];
const [event] = events;
const { name, date, seats } = event;

function showEvent(e = { name: "Default", date: "2025-01-01" }) {
    console.log(`${e.name} - ${e.date}`);
}

const eventsCopy = [...events];
