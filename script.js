document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
  
    if (isDark) {
      document.body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      const currentlyDark = document.body.classList.contains("dark-mode");
  
      localStorage.setItem("theme", currentlyDark ? "dark" : "light");
  
      toggleBtn.innerHTML = currentlyDark
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.querySelector('.back-button');

  if (
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/portfolio/"
  ) {
    if (backBtn) {
      backBtn.style.display = "none";
    }
  }
});
