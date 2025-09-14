const menuToggle = document.getElementById('mobile-menu');
const nav = document.querySelector(".nav");

menuToggle.addEventListener('click' , () => {
    nav.classList.toggle(active);
});

// گرفتن دکمه تغییر زبان
const langBtn = document.getElementById("langSwitch");

langBtn.addEventListener("click", function() {
    document.body.classList.toggle("lang-en"); // تغییر فونت
    if(langBtn.textContent === "EN") {
        langBtn.textContent = "FA"; // تغییر متن دکمه
        // تغییر متن Hero
        document.querySelector("h1").textContent = "Social Security Premium";
        document.querySelector("p").innerHTML = "Easy, fast and secure payment<br>No need to visit in person";
        document.querySelector(".hero-btn").textContent = "Order";
        // تغییر منو
        const menuItems = document.querySelectorAll(".nav-list li a");
        menuItems[0].textContent = "Home";
        menuItems[1].textContent = "About Us";
        menuItems[2].textContent = "Bank Services";
        menuItems[3].textContent = "Contact Us";
    } else {
        langBtn.textContent = "EN"; // بازگشت به فارسی
        // بازگرداندن متن Hero
        document.querySelector("h1").textContent = "حق بیمه تامین اجتماعی";
        document.querySelector("p").innerHTML = " پرداخت راحت،سریع و امن<br>بدون نیاز به مراجعه حضوری";
        document.querySelector(".hero-btn").textContent = "سفارش";
        // بازگرداندن منو
        const menuItems = document.querySelectorAll(".nav-list li a");
        menuItems[0].textContent = "صفحه اصلی";
        menuItems[1].textContent = "درباره ما";
        menuItems[2].textContent = "خدمات بانک";
        menuItems[3].textContent = "تماس با ما";
    }
});

document.getElementById("openLogin").addEventListener("click", function(){
    window.location.href = "login.html";
});