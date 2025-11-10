// Vanta.js 3D Network Background
// Initialize Vanta.js Background (on the wrapper div)
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x6c5ce7,
  backgroundColor: 0x0f1724,
  points: 10.0,
  maxDistance: 22.0,
  spacing: 18.0
});

// Initialize AOS Animations
AOS.init({
  duration: 1000,
  once: true,
  offset: 80
});

// Dynamic Year Update
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();


// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // animation duration in ms
  once: true,     // run animation once per element
  offset: 80      // animation trigger offset
});

// Update Footer Year Automatically
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
