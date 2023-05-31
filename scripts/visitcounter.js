//Visit Counter

// Get the current number of visits from local storage, or set to 0 if it doesn't exist
let numVisits = localStorage.getItem('numVisits') || 0;

// Update the visits counter on the page
document.getElementById('visits').textContent = numVisits;

// Increment the number of visits and store it in local storage
numVisits++;
localStorage.setItem('numVisits', numVisits);