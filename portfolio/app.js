//*function to display complete about me on mobile
function readMore() {
  const $dots = $("#dots");
  const $more = $("#more");
  const $buttontxt = $("#read-more");
  let showAll = false;

  if (showAll === false) {
    $dots.css("display", "none");
    $buttontxt.remove();
    $(".about-me").append(
      '<button onclick="readLess()" id="read-less">read less <i class="fas fa-chevron-up"></i></button>'
    );
    $more.css("display", "inline");
  } // else if (showAll === true) {
  //   $dots.css("display", "inline");
  //   $buttontxt.text("read more");
  //   $more.css("display", "none");
  // }
}
//*function to hide about me text
function readLess() {
  const $dots = $("#dots");
  const $more = $("#more");
  const $buttontxt = $("#read-less");
  let showAll = true;

  if (showAll === true) {
    $dots.css("display", "inline");
    $buttontxt.remove();
    $(".about-me").append(
      '<button onclick="readMore()" id="read-more">read more <i class="fas fa-chevron-down"></i></button>'
    );
    $more.css("display", "none");
  }
}
//* array of images to populate my skills section
let skills = [
  "https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png",
  "https://avatars3.githubusercontent.com/u/18133?s=200&v=4",
  "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
  "https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
  "https://pluspng.com/img-png/nodejs-logo-png--435.png",
  "https://cdn.iconscout.com/icon/free/png-512/heroku-5-569467.png",
  "https://cdn.freebiesupply.com/logos/large/2x/after-effects-cc-logo-png-transparent.png",
  "https://img.pngio.com/buy-adobe-education-contact-multiblue-and-receive-discounts-for-logo-adobe-illustrator-png-600_600.png",
  "https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_adobe_photoshop-512.png",
];
//*loop to populate skills section with logos of my skills
for (url in skills) {
  $(".skill-container").append(`<img src="${skills[url]}">`);
}

//*projects slider
//initialize
let mySwiper = new Swiper(".swiper-container", {
  //add cube effect and set params
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 10,
    shadowScale: 0.74,
  },
  //show pagination dots
  pagination: {
    el: ".swiper-pagination",
  },
  //show buttons
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
