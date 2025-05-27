// Task 4: Functions, Scope, Closures, Higher-Order Functions
function addEvent(events, newEvent) {
    events.push(newEvent);
}

function registerUser(event) {
    if (event.seats > 0) {
        event.seats--;
        return true;
    }
    return false;
}

function filterEventsByCategory(events, category) {
    return events.filter(e => e.category === category);
}

function categoryTracker() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

function filterWithCallback(events, callback) {
    return events.filter(callback);
}
