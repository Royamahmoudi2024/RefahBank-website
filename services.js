const servicesInfo = {
  "حساب جاری": "مدیریت حساب‌های جاری با امکانات پیشرفته و راحتی کامل.",
  "سپرده‌گذاری": "سپرده‌گذاری با سود مناسب و امکان برداشت آنلاین.",
  "وام‌ها": "وام‌های متنوع با شرایط انعطاف‌پذیر و بازپرداخت آسان.",
  "کارت‌ها": "کارت‌های اعتباری و بانکی با امنیت بالا و مزایای ویژه.",
  "اینترنت بانک": "دسترسی آنلاین به تمام خدمات بانکی در هر زمان.",
  "موبایل بانک": "اپلیکیشن موبایل بانک برای انجام سریع تراکنش‌ها."
};

const popup = document.querySelector("#popup");
const popupContent = popup.querySelector(".popup-content");
const closePopupBtn = popup.querySelector(".close-popup");
const moreBtns = document.querySelectorAll(".more-btn");

moreBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const service = btn.dataset.service;
    popupContent.querySelector("h2").textContent = service;
    popupContent.querySelector("p").textContent = servicesInfo[service] || "توضیحی در دسترس نیست.";
    popup.classList.add("active");
    popupContent.classList.add("show");
  });
});

closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  popupContent.classList.remove("show");
});

popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.classList.remove("active");
    popupContent.classList.remove("show");
  }
});