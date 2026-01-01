// Section reveal animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

// Accent color toggle
const themeBtn = document.getElementById("theme-btn");
let isGreen = true;

themeBtn.addEventListener("click", () => {
  document.documentElement.style.setProperty(
    "--accent",
    isGreen ? "#ff6b6b" : "#00ff99"
  );
  isGreen = !isGreen;
});

