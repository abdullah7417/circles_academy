// ~~~~~~~~~~~~~~~~NAV LINKS~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const achievements = document.querySelector(".achievements");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));

    this.classList.add("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    achievements.classList.remove("py-5");
    achievements.classList.add("py-4");
  } else {
    achievements.classList.remove("py-4");
    achievements.classList.add("py-5");
  }
});
// ~~~~~~~~~~~~~~~~MAIN SLIDER~~~~~~~~~~~~~~~~~~~~~~~
var swiper = new Swiper(".thumbsSwiper", {
  spaceBetween: 0,
  slidesPerView: "auto",
  freeMode: true,

  autoplay: {
    delay: 3000,
  },
  loop: true,

  watchSlidesProgress: true,
  // breakpoints: {
  //     640: {
  //         slidesPerView: 2,
  //     },
  //     768: {
  //         slidesPerView: 3,
  //     },
  //     1024: {
  //         slidesPerView: "auto",
  //     },
  // },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 0,
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 3000,
  },
  loop: true,

  thumbs: {
    swiper: swiper,
  },
});
//~~~~~~~~~~~GRADUATES SLIDER~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function () {
  new Swiper(".grad-swipper", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-prev-grad",
      prevEl: ".swiper-button-next-grad",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
});
//~~~~~~~~~~~CALL CENTER BUTTON~~~~~~~~~~~~~~~~~~~~~~~~
const mainBtn = document.querySelector(".main-btn");
const iconWrapper = document.querySelector(".icon-wrapper");
mainBtn.addEventListener("click", () => {
  iconWrapper.classList.toggle("show");
  if (mainIcon.classList.contains("fa-headset")) {
    mainIcon.classList.remove("fa-headset");
    mainIcon.classList.add("fa-x");
  } else {
    mainIcon.classList.remove("fa-x");
    mainIcon.classList.add("fa-headset");
  }
});
// ~~~~~~~~~~~~~~~~~~~INS SLIDER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function () {
  new Swiper(".swiper-container", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-prev-ins",
      prevEl: ".swiper-button-next-ins",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    slidesPerView: 3,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      400: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      767: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
});
