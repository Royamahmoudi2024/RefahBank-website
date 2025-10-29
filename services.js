// 🎵 صداهای باز و بسته شدن پاپ‌آپ
const popupOpenSound = new Audio("sounds/popup-open.mp3");
const popupCloseSound = new Audio("sounds/popup-close.mp3");
popupOpenSound.volume = 0.4;
popupCloseSound.volume = 0.3;

// اطلاعات هر خدمت
const serviceDetails = {
  1: {
    title: "وام فوری",
    desc: "دریافت وام بدون ضامن در کمتر از ۲۴ ساعت با اعتبارسنجی آنلاین و بدون مراجعه حضوری."
  },
  2: {
    title: "سپرده طلایی",
    desc: "سپرده‌های بلندمدت با نرخ سود ویژه، قابل برداشت در هر زمان و خدمات اختصاصی برای مشتریان وفادار."
  },
  3: {
    title: "کارت اعتباری",
    desc: "کارت‌های اعتباری با سقف خرید بالا، اقساط منعطف و جوایز نقدی برای پرداخت‌های منظم."
  }
};

const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDesc = document.getElementById("popup-desc");
const closePopup = document.querySelector(".close-popup");

// باز کردن پاپ‌آپ
document.querySelectorAll(".more-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.parentElement.getAttribute("data-service");
    popupTitle.textContent = serviceDetails[id].title;
    popupDesc.textContent = serviceDetails[id].desc;
    popup.classList.add("show");

    popupOpenSound.currentTime = 0;
    popupOpenSound.play();
  });
});

// بستن پاپ‌آپ
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
  popupCloseSound.currentTime = 0;
  popupCloseSound.play();
});

// بستن با کلیک بیرون
popup.addEventListener("click", e => {
  if (e.target === popup) {
    popup.classList.remove("show");
    popupCloseSound.currentTime = 0;
    popupCloseSound.play();
  }
});