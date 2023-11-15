// ============================================ NAVBAR ============================================// 

const navList = document.querySelector(".nav-list");
const showMenu = document.getElementById("open-btn");
const hideMenu = document.getElementById("close-btn");

if (showMenu) {
    showMenu.addEventListener("click", () => {
        navList.classList.add("show-navList")
    })
}
if (hideMenu) {
    hideMenu.addEventListener("click", () => {
        navList.classList.remove("show-navList")
    })
}

// ============================================ ACCORDION ============================================// 

const accodions = document.querySelectorAll(".qna-card");
const faqBtn = document.querySelector(".faq-btn");
Array.from(accodions).forEach((accodion) => {
    accodion.addEventListener("click", () => {
        accodion.classList.add("active")
    })
})


// ============================================ SLIDER ============================================// 

const sliders = document.querySelectorAll(".slider");

const slideInit = function (currentSlider) {

    const sliderContainer = currentSlider.querySelector(".slider-container");
    const sliderPrevBtn = currentSlider.querySelector("#prevBtn");
    const sliderNextBtn = currentSlider.querySelector("#nextBtn");

    const totalSliderVisibleItems = Number(getComputedStyle(currentSlider).getPropertyValue("--slider-item"));
    const totalSliderItems = sliderContainer.childElementCount - totalSliderVisibleItems;

    let currentSlidePosition = 0;

    const moveSliderItem = function () {
        sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePosition].offsetLeft}px)`;
    }

    // Next Slider

    const slideNext = function () {
        const SlideEnd = currentSlidePosition >= totalSliderItems;

        if (SlideEnd) {
            currentSlidePosition = 0;
        } else {
            currentSlidePosition++;
        }
        moveSliderItem();
    }
    sliderNextBtn.addEventListener("click", slideNext)

    // Prev Slider

    const slidePrev = function () {
        if (currentSlidePosition <= 0) {
            currentSlidePosition = totalSliderItems;
        } else {
            currentSlidePosition--;
        }
        moveSliderItem();
    }
    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = totalSliderItems <= 0;
    if(dontHaveExtraItem) {
        sliderNextBtn.setAttribute("disabled" ,"");
        sliderPrevBtn.setAttribute("disabled" ,"");
    }
    let autoslideInterval;
    const startAutoSlide = () => autoslideInterval = setInterval(slideNext, 2500);
    startAutoSlide();
    const stopAutoSlide = () => clearInterval(autoslideInterval);

    currentSlider.addEventListener("mouseover", stopAutoSlide);
    currentSlider.addEventListener("mouseout", startAutoSlide);

    window.addEventListener("resize", moveSliderItem)
}

for (let i = 0; len = sliders.length; i < len, i++) { slideInit(sliders[i])};

