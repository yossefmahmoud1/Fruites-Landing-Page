document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    if (localStorage.getItem("dark-mode") === "enabled") {
      body.classList.add("dark-mode");
      themeToggle.textContent = "☀️";
    } else {
      themeToggle.textContent = "🌙"; 
    }
  
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
  
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled"); 
        themeToggle.textContent = "☀️"; 
      } else {
        localStorage.setItem("dark-mode", "disabled"); 
        themeToggle.textContent = "🌙"; 
      }
    });
  });

const menuToggle = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');
});