let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let dots = document.getElementsByClassName("dot");

function showSlides() {
    // Hide all slides and remove 'active' class from dots
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        dots[i].classList.remove("active");
    }

    // Increment the slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to the first slide
    }

    // Prepare the new slide
    slides[slideIndex - 1].style.display = "block"; // Ensure it's ready to be seen
    setTimeout(() => { // Timeout to ensure the display property is applied before starting the opacity transition
        slides[slideIndex - 1].style.opacity = "1";
    }, 20);

    // Update dots to reflect the current slide
    dots[slideIndex - 1].classList.add("active");

    // Set a timeout to hide the current slide and show the next slide
    setTimeout(showSlides, 6000); // Change image every 6 seconds
}

// Call showSlides function when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Initially, prepare the first slide to be displayed
    slides[0].style.display = "block";
    setTimeout(() => {
        slides[0].style.opacity = "1";
    }, 20);

    // Start the slideshow
    setTimeout(showSlides, 6000);
});