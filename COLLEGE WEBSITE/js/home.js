// Image Slider
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = (i === index) ? "block" : "none";
  });
}

prev.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
});

next.addEventListener("click", () => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
});

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}, 4000);

showSlide(currentIndex);

// Notice Board (Dynamic Data)
const notices = [
  "Admission for 2025-26 session is now open.",
  "Internal exam will start from 10th September.",
  "Library will remain closed on Sunday.",
  "Annual Sports Meet on 20th October."
];

const noticeList = document.getElementById("notice-list");
notices.forEach(notice => {
  let li = document.createElement("li");
  li.textContent = notice;
  noticeList.appendChild(li);
});
