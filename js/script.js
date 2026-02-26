// ===================================
// PROJECTS DATA
// ===================================
const projects = [
  {
    id: 1,
    title: "AI Powered ToDo",
    description: "AI-integrated task manager with smart commands and clean UI.",
    longDescription:
      "A clean, functional, and AI-integrated Todo application built with React, Tailwind CSS, and CopilotKit. This app allows users to manage tasks efficiently with local storage persistence and AI-assisted commands.",
    category: "Frontend",
    status: "Completed",
    technologies: ["React", "Tailwind CSS", "CopilotKit"],
    features: ["Read Tasks", "Add Todo", "Delete Todos", "Updates Todo"],
    progress: 100,
    github: "https://github.com/Jagat05/todo_aipowered-simple",
    live: "https://todo-aipowered-simple-jj.vercel.app/",
  },
  {
    id: 2,
    title: "AfnoDokan",
    description: "Afno Dokan is a modern e-commerce frontend application.",
    longDescription:
      "Your Shop, Your Way! Afno Dokan is a modern e-commerce frontend application built with the latest web technologies using Next.js App Router. This project demonstrates frontend architecture, reusable components, form handling, admin workflows, and production-ready deployment on Vercel.",
    category: "Frontend",
    status: "completed",
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Lucide React ",
      "Framer Motion",
      "Formik &Yup",
      "Axios",
    ],
    features: [
      "Login page",
      "Register page",
      "Home page",
      "Admin Panel",
      "Product and User CRUD operations (frontend)",
    ],
    progress: 70,
    github: "https://github.com/Jagat05/AfnoDokan",
    live: "https://afno-dokan.vercel.app/",
  },
  {
    id: 3,
    title: "Sambad",
    description:
      "Modern organization chat application for seamless team communication",
    longDescription:
      "Sambad is a real-time chat application designed for organizations to enhance team communication. Features include group chats, file sharing, video calls, message encryption, and administrative controls. Built with modern web technologies for optimal performance.",
    category: "FullStack",
    status: "Completed",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    features: [
      "Real-time Messaging",
      "Group Chats",
      "Organization Creation",
      "Member Management",
      "Message Encryption",
    ],
    progress: 60,
    github: "https://github.com/Jagat05/Sambad",
    live: "#",
  },
  {
    id: 4,
    title: "Hamro Dokan",
    description:
      "Nepali E-Commerce platform for traditional tools and handicrafts",
    longDescription:
      "Hamro Dokan is a comprehensive e-commerce platform showcasing traditional Nepali tools, handicrafts, and market-demand products. Features include product catalog, shopping cart, payment integration, and order management.",
    category: "FullStack",
    status: "completed",
    technologies: ["PHP", "MySQL", "JavaScript", "React"],
    features: ["Product Catalog", "Shopping Cart", "Order Management"],
    github: "https://github.com/Jagat05/HamroDokan",
    live: "#",
  },
  {
    id: 5,
    title: "CafePilot",
    description:
      "A MERN-stack cafe management system for handling tables, orders, bills, and payments efficiently.",
    longDescription:
      "A MERN-stack café management system designed to handle tables, orders, bills, and payments efficiently. It streamlines daily operations, making café management faster and more organized..",
    category: "FullStack",
    status: "ongoing",
    technologies: [
      "React.js",
      "Nextjs(App Router)",
      "Express.js",
      "Tailwind CSS",
      "JWT",
    ],
    features: [
      "Table Management",
      "Order Management",
      "Billing & Invoicing",
      "Menu Management",
      "Cafe Authentication ",
    ],
    github: "https://github.com/Jagat05/CafePilot",
    live: "#",
  },
  {
    id: 6,
    title: "Sachet Palika",
    description:
      "A full-stack MERN platform connecting citizens and municipal authorities to streamline public requests/Reports, issue tracking, and communication.",
    longDescription:
      "A full-stack MERN platform enabling citizens to report public issues—such as unmanaged dustbins, broken public property, unusual or destructive activities, and dead animals—directly to municipal authorities. Authorities can track, manage, and resolve these reports efficiently.",
    category: "FullStack",
    status: "ongoing",
    technologies: [
      "React.js",
      "Nextjs(App Router)",
      "Tailwind CSS",
      "Express.js",
      "JWT",
      "REST APIs",
    ],
    features: [
      "Citizens can report public issues",
      "Role-Based Dashboards",
      "Real-Time Issue Tracking",
      "Enhanced Communication",
    ],
    github: "https://github.com/Jagat05/Sachet-Palika",
    live: "#",
  },
  {
    id: 7,
    title: "SikyaNet",
    description:
      "Comprehensive Institute Management System for educational institutions",
    longDescription:
      "SikyaNet is a complete institute management system designed to streamline educational operations. It includes student management, course tracking, attendance systems, grade management, and administrative tools. Built with modern web technologies to ensure scalability and user-friendly experience.",
    category: "FullStack",
    status: "ongoing",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Tailwind CSS",
      "Cloudinary",
    ],
    features: [
      "Student Management",
      "Course Tracking",
      "Attendance System",
      "Admin Dashboard",
    ],
    progress: 50,
    github: "https://github.com/Jagat05/ShikshyaNet",
    live: "#",
  },
  {
    id: 8,
    title: "Learn KMC",
    description:
      "Educational WordPress site for Kailali Multiple Campus students",
    longDescription:
      "Learn KMC is a comprehensive WordPress-based educational platform that provides study materials, course information, and resources for students at Kailali Multiple Campus.",
    category: "wordpress",
    status: "completed",
    technologies: ["WordPress", "PHP", "MySQL", "Custom Themes", "Plugins"],
    features: [
      "Course Materials",
      "Student Portal",
      "Resource Library",
      "News & Updates",
      "Mobile Responsive",
    ],
    github: "#",
    live: "#",
  },
];

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================
const navbar = document.getElementById("navbar");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.querySelectorAll(".nav-link");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

// Navbar scroll effect
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
}

// Mobile menu toggle
if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const menuIcon = mobileMenuToggle.querySelector(".menu-icon");
    const closeIcon = mobileMenuToggle.querySelector(".close-icon");
    if (menuIcon) menuIcon.classList.toggle("hidden");
    if (closeIcon) closeIcon.classList.toggle("hidden");
  });
}

// Close mobile menu when clicking on a link
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    const menuIcon = mobileMenuToggle.querySelector(".menu-icon");
    const closeIcon = mobileMenuToggle.querySelector(".close-icon");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Update active nav link
function updateActiveNavLink() {
  const sections = ["home", "about", "projects", "contact"];
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const offsetTop = element.offsetTop;
      const height = element.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.dataset.section === section) {
            link.classList.add("active");
          }
        });
        break;
      }
    }
  }
}

// ===================================
// THEME TOGGLE
// ===================================
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const sunIcon = themeToggle.querySelector(".sun-icon");
  const moonIcon = themeToggle.querySelector(".moon-icon");

  // Check for saved theme preference or default to 'dark'
  const currentTheme = localStorage.getItem("theme") || "dark";
  if (currentTheme === "light") {
    document.body.classList.add("light");
    if (sunIcon) sunIcon.classList.add("hidden");
    if (moonIcon) moonIcon.classList.remove("hidden");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    if (sunIcon) sunIcon.classList.toggle("hidden");
    if (moonIcon) moonIcon.classList.toggle("hidden");

    // Save theme preference
    const theme = document.body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);
  });
}

// ===================================
// TYPING ANIMATION
// ===================================
const typedText = document.getElementById("typedText");

if (typedText) {
  const fullText =
    "Web Developer From Nepal | MERN Stack Developer | Evolving with Every Line of Code.";
  let currentIndex = 0;

  function typeText() {
    if (currentIndex <= fullText.length) {
      typedText.textContent = fullText.slice(0, currentIndex);
      currentIndex++;
      setTimeout(typeText, 50);
    }
  }

  typeText();
}

// ===================================
// SMOOTH SCROLLING
// ===================================
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Add smooth scrolling to all nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ===================================
// PROJECTS FUNCTIONALITY
// ===================================
const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Initialize projects
function renderProjects(filter = "all") {
  if (!projectsGrid) return;
  projectsGrid.innerHTML = "";

  let filteredProjects = projects;

  if (filter === "ongoing" || filter === "completed") {
    filteredProjects = projects.filter((p) => p.status === filter);
  }

  // Sort: ongoing projects first
  filteredProjects.sort((a, b) => {
    if (a.status === "ongoing" && b.status !== "ongoing") return -1;
    if (a.status !== "ongoing" && b.status === "ongoing") return 1;
    return a.id - b.id;
  });

  filteredProjects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.className = "project-card fade-in";
  card.style.animationDelay = `${index * 0.1}s`;

  const statusClass = project.status === "ongoing" ? "ongoing" : "completed";
  const statusIcon =
    project.status === "ongoing"
      ? '<svg width="20" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
      : '<svg width="20" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';

  const progressBar =
    project.status === "ongoing" && project.progress
      ? `<div class="project-progress">
            <div class="progress-info">
                <span>Progress</span>
                <span>${project.progress}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
        </div>`
      : "";

  const techBadges = project.technologies
    .slice(0, 3)
    .map((tech) => `<span class="tech-badge">${tech}</span>`)
    .join("");

  const moreTech =
    project.technologies.length > 3
      ? `<span class="tech-badge">+${project.technologies.length - 3}</span>`
      : "";

  card.innerHTML = `
        <div class="project-image" role="img" aria-label="${project.title} - ${project.description}">
            <div class="project-status ${statusClass}">
                ${statusIcon}
                ${project.status === "ongoing" ? "Ongoing" : "Completed"}
            </div>
            ${progressBar}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${techBadges}
                ${moreTech}
            </div>
            <div class="project-links">
                <button class="project-link" onclick="openProjectModal(${project.id})" aria-label="View details of ${project.title}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View Details
                </button>
            </div>
        </div>
    `;

  return card;
}

// Filter functionality
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Filter projects
    const filter = button.dataset.filter;
    renderProjects(filter);
  });
});

// Initialize projects on page load
if (projectsGrid) {
  renderProjects();
}

// ===================================
// PROJECT MODAL
// ===================================
const projectModal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

  const statusClass = project.status === "ongoing" ? "ongoing" : "completed";
  const statusIcon =
    project.status === "ongoing"
      ? '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
      : '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>';

  const progressBar =
    project.status === "ongoing" && project.progress
      ? `<div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
                <span style="font-weight: 500;">Development Progress</span>
                <span style="color: var(--primary); font-weight: 700;">${project.progress}%</span>
            </div>
            <div style="width: 100%; height: 8px; background-color: var(--secondary); border-radius: 4px; overflow: hidden;">
                <div style="height: 100%; width: ${project.progress}%; background-color: var(--primary); transition: width 0.5s ease;"></div>
            </div>
        </div>`
      : "";

  const featuresHTML = project.features
    .map(
      (feature) =>
        `<div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--primary); margin-right: 0.5rem; flex-shrink: 0;">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span style="font-size: 0.875rem;">${feature}</span>
        </div>`,
    )
    .join("");

  const techBadges = project.technologies
    .map(
      (tech) =>
        `<span style="display: inline-block; padding: 0.25rem 0.75rem; background-color: var(--secondary); border-radius: var(--radius); font-size: 0.875rem; margin: 0.25rem;">${tech}</span>`,
    )
    .join("");

  modalBody.innerHTML = `
        <div>
            <h3 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">${project.title}</h3>
            <div class="project-status ${statusClass}" style="display: inline-flex; margin-bottom: 1.5rem;">
                ${statusIcon}
                ${project.status === "ongoing" ? "Ongoing" : "Completed"}
            </div>
        </div>
        
        ${progressBar}
        
        <div style="height: 16rem; background: linear-gradient(135deg, hsla(217, 91%, 60%, 0.2), hsla(220, 19%, 20%, 0.2)); border-radius: var(--radius); margin-bottom: 1.5rem;"></div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">About This Project</h4>
            <p style="color: var(--muted-foreground); line-height: 1.8;">${project.longDescription}</p>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Key Features</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem;">
                ${featuresHTML}
            </div>
        </div>
        
        <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Technologies Used</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${techBadges}
            </div>
        </div>
        
        <div style="display: flex; gap: 1rem;">
            <button class="btn btn-primary" style="flex: 1;" onclick="window.open('${project.github}', '_blank')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View Source Code
            </button>
            <button class="btn btn-outline" style="flex: 1;" onclick="window.open('${project.live}', '_blank')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Live Demo
            </button>
        </div>
    `;

  projectModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close modal when clicking overlay
projectModal
  .querySelector(".modal-overlay")
  .addEventListener("click", closeProjectModal);

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !projectModal.classList.contains("hidden")) {
    closeProjectModal();
  }
});

// ===================================
// CONTACT FORM (Formspree Integration)
// ===================================
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Disable submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonHTML = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = `
        <div style="width: 20px; height: 20px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        Sending Message...
    `;

    // Add spin animation if not already added
    if (!document.getElementById("spin-animation")) {
      const style = document.createElement("style");
      style.id = "spin-animation";
      style.textContent =
        "@keyframes spin { to { transform: rotate(360deg); } }";
      document.head.appendChild(style);
    }

    try {
      // Submit form to Formspree
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        // Show success toast
        showToast();

        // Reset form
        contactForm.reset();
      } else {
        // Handle error
        const data = await response.json();
        if (data.errors) {
          alert(
            "Oops! There was a problem submitting your form: " +
              data.errors.map((error) => error.message).join(", "),
          );
        } else {
          alert(
            "Oops! There was a problem submitting your form. Please try again.",
          );
        }
      }
    } catch (error) {
      alert(
        "Oops! There was a problem submitting your form. Please try again later.",
      );
      console.error("Form submission error:", error);
    } finally {
      // Re-enable submit button
      submitButton.disabled = false;
      submitButton.innerHTML = originalButtonHTML;
    }
  });
}

function showToast() {
  if (!toast) return;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 5000);
}

// ===================================
// FOOTER YEAR
// ===================================
const currentYearElement = document.getElementById("currentYear");
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

// ===================================
// PAGE LOAD ANIMATIONS
// ===================================
window.addEventListener("load", () => {
  // Add fade-in animation to elements
  const fadeElements = document.querySelectorAll(
    ".hero-content, .hero-terminal, .hero-actions, .social-links",
  );
  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("fade-in");
    }, index * 100);
  });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all cards
document
  .querySelectorAll(".info-card, .skill-card, .interest-card, .contact-card")
  .forEach((card) => {
    observer.observe(card);
  });
