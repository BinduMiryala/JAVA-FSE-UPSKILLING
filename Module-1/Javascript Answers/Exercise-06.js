// Task 6: Arrays and Methods
const events = [];
events.push({ name: "Music Gala", category: "music" });

const musicEvents = events.filter(e => e.category === "music");

const displayCards = events.map(e => `Event: ${e.name}`);
console.log(displayCards);
