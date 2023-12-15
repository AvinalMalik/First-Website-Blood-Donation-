let timeout; // Variable to hold the timeout, do not overwrite

function resetScrollbar() {
    // Function to hide scrollbar by setting the color to transparent
    document.documentElement.style.setProperty('--scrollbar-visible', 'transparent');
}

document.addEventListener('mousemove', () => {
    // When the mouse is moved,
    // Set the scrollbar color to red
    document.documentElement.style.setProperty('--scrollbar-visible', 'rgb(198, 0, 1)');

    // Clear the timeout set before
    clearTimeout(timeout);

    // Set a new timeout to hide the scrollbar after 2 seconds of inactivity
    timeout = setTimeout(resetScrollbar, 2000);
});

// Initial call to resetScrollbar to ensure it's in the correct state when the page loads
resetScrollbar();
