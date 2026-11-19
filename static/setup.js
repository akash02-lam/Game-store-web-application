const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoPlay;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function startAutoPlay() {
    stopAutoPlay();

    autoPlay = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopAutoPlay() {
    clearInterval(autoPlay);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    startAutoPlay();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    startAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
        startAutoPlay();
    });
});

showSlide(0);
startAutoPlay();