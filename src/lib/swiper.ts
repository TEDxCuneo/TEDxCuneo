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
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
      },
    });
    carousel
      .getElementsByClassName("swiper-button-prev")[0]
      .addEventListener("click", () => {
        swiper.slidePrev();
      });
    carousel
      .getElementsByClassName("swiper-button-next")[0]
      .addEventListener("click", () => {
        swiper.slideNext();
      });
  }
});
