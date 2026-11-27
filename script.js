const themeLink = document.getElementById("theme-css");
const toggleBtn = document.getElementById("themeToggle");

function applyTheme(theme) {
  if (theme === "day") {
    themeLink.setAttribute("href", "portfolio.css");
    if (toggleBtn) toggleBtn.textContent = "☀️"; // Day মোডে থাকলে Night-এ যাওয়ার ইঙ্গিত
    localStorage.setItem("selectedTheme", "day");
  } else {
    themeLink.setAttribute("href", "style.css");
    if (toggleBtn) toggleBtn.textContent = "🌙"; // Night মোডে থাকলে Day-তে যাওয়ার ইঙ্গিত
    localStorage.setItem("selectedTheme", "night");
  }
}

// পেজ লোড বা রিলোড হলে সেভ করা থিম চালু করা (ডিফল্ট "night")
const savedTheme = localStorage.getItem("selectedTheme") || "night";
applyTheme(savedTheme);

// বাটনে ক্লিক করলে Day <-> Night সুইচ ও সেভ করা
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const currentTheme = localStorage.getItem("selectedTheme") || "night";
    const nextTheme = currentTheme === "night" ? "day" : "night";
    applyTheme(nextTheme);
  });
}
