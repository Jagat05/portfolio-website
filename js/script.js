
document.addEventListener("DOMContentLoaded", function() {
  // Wait for the megaphone animation to finish (1.5s)
  setTimeout(() => {
    // Make the rightward arrow visible
    const arrow = document.querySelector('.arrow-container');
    arrow.style.visibility = 'visible'; // Show the arrow

    // Show the Let's Talk image
    const letstalk = document.querySelector('.letstalk');
    letstalk.style.display = 'block'; // Show the image
  }, 1500); // Match with the megaphone animation duration
});
