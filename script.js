const carousel = document.querySelector(".carousel");
const slides = [...document.querySelectorAll(".slide")];
const dots = [...document.querySelectorAll(".dot")];

const slideWidth = slides[0].getBoundingClientRect().width;

for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = `${(slideWidth + 40) * i}px`;
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    console.log("clicked", index);
  });
});
