import Swiper from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.getElementsByClassName("swiper");
  for (const carousel of carousels) {
    const title = carousel.getAttribute("data-title");
    const swiper = new Swiper(`#${carousel.id}`, {
      loop: false,
      spaceBetween: 15,
      slidesPerView: "auto",
      a11y: {
        enabled: true,
        containerMessage: title ?? "Carosello",
        prevSlideMessage: "Slide precedente",
        nextSlideMessage: "Slide successiva",
        firstSlideMessage: "Prima slide",
        containerRoleDescriptionMessage: "Carosello",
        id: carousel.id,
        itemRoleDescriptionMessage: "Slide",
        lastSlideMessage: "Ultima slide",
      },
      breakpoints: {
        768: {
          spaceBetween: 18,
        },
        1024: {
          spaceBetween: 20,
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
