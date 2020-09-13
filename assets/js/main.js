$(function () {
  // object-fit-images
  objectFitImages();

  // Swiper
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 15,
    loopedSlides: 6,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      920: {
				slidesPerView: 2
      },
      625: {
				slidesPerView: 1
      }
    }
  });

  // wow.js
  new WOW().init();

  // smooth scrolling
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
