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
function startCountdown() {
  const countdownElements = document.querySelectorAll(".countdown");

  countdownElements.forEach((element) => {
    const endTime = new Date(element.getAttribute("data-time")).getTime();

    function updateCountdown() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        element.innerHTML = `⏳ ينتهي خلال: ${days}ي ${hours}س ${minutes}د ${seconds}ث`;
      } else {
        element.innerHTML = "🚀 انتهى العرض!";
      }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  });
}

document.addEventListener("DOMContentLoaded", startCountdown);
