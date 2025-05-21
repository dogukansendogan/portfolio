document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("themeToggle");
  
    // Tema durumunu localStorage'dan al
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
  
    // İlk yüklemede temayı uygula
    if (isDark) {
      document.body.classList.add("dark-mode");
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
  
    // Tıklama ile tema değiştir
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      const currentlyDark = document.body.classList.contains("dark-mode");
  
      // localStorage güncelle
      localStorage.setItem("theme", currentlyDark ? "dark" : "light");
  
      // Buton metni değiştir
      toggleBtn.innerHTML = currentlyDark
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
    });
  });
  