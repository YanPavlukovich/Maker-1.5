// Slider Swiper.
const slider = document.querySelector(".brands-swiper");

let mobileSlider = () => {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: -64,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
      },
    });
    slider.dataset.mobile = "true";
  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("brands-swiper-initialized")) {
      mySwiper.destroy();
    }
  }
};

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

// Button Show more.
let buttonShow = document.querySelector(".show-more");
let brandsList = document.querySelector(".brands-list");
let buttonText = document.querySelector(".show-more__text");
let buttonIcon = document.querySelector(".show-more__icon");

function handleClick() {
  if (window.innerWidth < 1120) {
    brandsList.classList.toggle("list-open--tablet");
  }
  if (window.innerWidth >= 1120) {
    brandsList.classList.toggle("list-open--desktop");
  }
  buttonIcon.classList.toggle("animation--up");
  if (
    !brandsList.classList.contains("list-open--desktop") &&
    !brandsList.classList.contains("list-open--tablet")
  ) {
    buttonText.textContent = "Показать все";
  } else {
    buttonText.textContent = "Скрыть";
  }
}

buttonShow.addEventListener("click", handleClick);
