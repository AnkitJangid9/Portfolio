/* =========================
   Section Reveal Animation
========================= */
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

/* =========================
   Accent Color Toggle 🎨
========================= */
const themeBtn = document.getElementById("theme-btn");
let isGreen = true;

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.documentElement.style.setProperty(
      "--accent",
      isGreen ? "#ff6b6b" : "#00ff99"
    );
    isGreen = !isGreen;
  });
}

/* =========================
   Gradient Background Toggle 🌈
========================= */
const gradientThemes = [
  {
    gradient: "linear-gradient(135deg, #020617, #0f172a)",
    text: "#e5e7eb",
    glass: "rgba(255,255,255,0.08)"
  },
  {
    gradient: "linear-gradient(135deg, #052e16, #14532d)",
    text: "#dcfce7",
    glass: "rgba(255,255,255,0.10)"
  },
  {
    gradient: "linear-gradient(135deg, #2e1065, #3a0ca3)",
    text: "#f5f3ff",
    glass: "rgba(255,255,255,0.12)"
  },
  {
    gradient: "linear-gradient(135deg, #ffedd5, #fed7aa)",
    text: "#1f2937",
    glass: "rgba(255,255,255,0.45)"
  }
];

let gradientIndex = 0;
const gradientBtn = document.getElementById("bg-gradient-toggle");

if (gradientBtn) {
  gradientBtn.addEventListener("click", () => {
    gradientIndex = (gradientIndex + 1) % gradientThemes.length;

    document.documentElement.style.setProperty(
      "--bg-gradient",
      gradientThemes[gradientIndex].gradient
    );

    document.documentElement.style.setProperty(
      "--text-color",
      gradientThemes[gradientIndex].text
    );

    document.documentElement.style.setProperty(
      "--glass-bg",
      gradientThemes[gradientIndex].glass
    );
  });
}

/* =========================
   Glass Effect Toggle 🧊
========================= */
const glassBtn = document.getElementById("glass-toggle");

if (glassBtn) {
  glassBtn.addEventListener("click", () => {
    document.body.classList.toggle("glass-enabled");
  });
}
