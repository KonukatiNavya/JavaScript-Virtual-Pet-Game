// Pet's initial stats
let health = 100;
let happiness = 100;

const healthEl = document.getElementById('health');
const happinessEl = document.getElementById('happiness');
const petEl = document.getElementById('pet');

// Function to update the displayed stats
function updateStats() {
    healthEl.textContent = health;
    happinessEl.textContent = happiness;
}

// Handle actions
document.getElementById('feed-btn').addEventListener('click', function() {
    health = Math.min(100, health + 10);
    petInteraction("feed");
    updateStats();
});

document.getElementById('play-btn').addEventListener('click', function() {
    happiness = Math.min(100, happiness + 15);
    health = Math.max(0, health - 5); // Playing decreases health slightly
    petInteraction("play");
    updateStats();
});

document.getElementById('rest-btn').addEventListener('click', function() {
    health = Math.min(100, health + 5);
    happiness = Math.max(0, happiness - 5); // Rest decreases happiness slightly
    petInteraction("rest");
    updateStats();
});

// Pet interaction visual feedback
function petInteraction(action) {
    petEl.classList.add('animate');
    setTimeout(() => petEl.classList.remove('animate'), 300);

    // Change pet image or animations based on action (optional)
    switch(action) {
        case 'feed':
            petEl.src = 'cat.avif'; // You can change this to different pet images
            break;
        case 'play':
            petEl.src = 'play.jpg';
            break;
        case 'rest':
            petEl.src = 'sleep.jpg';
            break;
    }
}

// Periodic decrease in pet stats
setInterval(function() {
    health = Math.max(0, health - 1);
    happiness = Math.max(0, happiness - 1);
    updateStats();
}, 3000); // Decrease stats every 3 seconds

// Initial stats update
updateStats();
