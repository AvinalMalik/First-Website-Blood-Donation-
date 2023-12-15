// Function to update the counter
const updateCounter = (counter, increment, target) => {
    const current = +counter.innerText.replace('+','');

    if (current < target) {
        // Increment the counter
        counter.innerText = `${Math.ceil(current + increment)}+`;
        // Schedule the next increment
        setTimeout(() => updateCounter(counter, increment, target), 1);
    } else {
        // Ensure counter does not exceed the target
        counter.innerText = target.toString()+'+';
    }
};

// Initialize the counters on DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 1000; // This can be adjusted as needed

        updateCounter(counter, increment, target);
    });
});
