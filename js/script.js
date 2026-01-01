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

// Background color toggle
const bgThemes = [
  { bg: "#000000", text: "#ffffff" }, // Black
  { bg: "#ffffff", text: "#000000" }, // White
  { bg: "#0f172a", text: "#e5e7eb" }, // Dark Blue
  { bg: "#1b4332", text: "#d8f3dc" }, // Green
  { bg: "#3a0ca3", text: "#f1f1f1" }, // Purple
  { bg: "#ffedd5", text: "#1f2937" }  // Light
];

let currentTheme = 0;

const bgToggleBtn = document.getElementById("bg-toggle");

if (bgToggleBtn) {
  bgToggleBtn.addEventListener("click", () => {
    currentTheme = (currentTheme + 1) % bgThemes.length;

    document.documentElement.style.setProperty(
      "--bg-color",
      bgThemes[currentTheme].bg
    );

    document.documentElement.style.setProperty(
      "--text-color",
      bgThemes[currentTheme].text
    );
  });
}



