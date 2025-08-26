// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Animate hamburger into "X"
  hamburger.classList.toggle("open");
});

// Add animation styles dynamically
const style = document.createElement("style");
style.textContent = `
  .hamburger.open div:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .hamburger.open div:nth-child(2) {
    opacity: 0;
  }
  .hamburger.open div:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;
document.head.appendChild(style);
