import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.getElementsByClassName("swiper");
  for (const carousel of carousels) {
    const swiper = new Swiper(`#${carousel.id}`, {
      loop: false,
      slidesPerView: 1.2,
      breakpoints: {
        540: {
          slidesPerView: 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
      },
    });
    const prevButton = carousel.getElementsByClassName("swiper-button-prev");
    if (prevButton.length > 0) {
      prevButton[0].addEventListener("click", () => {
        swiper.slidePrev();
      });
    }

    const nextButton = carousel.getElementsByClassName("swiper-button-next");

    if (nextButton.length > 0) {
      nextButton[0].addEventListener("click", () => {
        swiper.slideNext();
      });
    }
  }
});
