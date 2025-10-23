document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.querySelector(".about-hero h1");
    const heroText = document.querySelector(".about-hero p");
    const mainContent = document.querySelector(".about-main");

    setTimeout(() => { heroTitle.style.opacity = 1; }, 100);
    setTimeout(() => { heroText.style.opacity = 1; }, 500);
    setTimeout(() => { mainContent.style.opacity = 1; }, 1000);
});