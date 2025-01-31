// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggleDarkMode');

toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggleDarkMode.textContent = '☀️'; // Change to sun icon
  } else {
    toggleDarkMode.textContent = '🌙'; // Change back to moon icon
  }
});

//JavaScript for Toggling Menu 
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('show');
}

function closeMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.remove('show');
}
// for prohect secion
// Filtering Projects by Category
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', function () {
    // Remove active class from all buttons
    filterButtons.forEach((button) => button.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');

    projectCards.forEach((card) => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Modal Functionality
function openModal(title, description) {
  const modal = document.getElementById('projectModal');
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  modal.style.display = 'block';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

// Close modal on clicking outside the content
window.onclick = function (event) {
  const modal = document.getElementById('projectModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
// for Smooth Scroll to Top

  document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();
});
