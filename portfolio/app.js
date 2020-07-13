//*function to display complete about me on mobile
function readMore() {
  const $dots = $("#dots");
  const $more = $("#more");
  const $buttontxt = $("#read-more");

  if ($dots.display === "none") {
    $dots.css("display", "inline");
    $buttontxt.text('read more <i class="fas fa-chevron-down"></i>');
    $more.css("display", "none");
  } else {
    $dots.css("display", "none");
    $buttontxt.css("display", "none");
    $more.css("display", "inline");
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
  "https://financesonline.com/uploads/2019/08/Adobe-After-Effects-logo1.png",
  "https://img.pngio.com/buy-adobe-education-contact-multiblue-and-receive-discounts-for-logo-adobe-illustrator-png-600_600.png",
  "https://i.dlpng.com/static/png/1609840-photoshop-cc-logo-png-210x99-photoshop-logo-png-transparent-free-images-photoshop-logo-png-720_340_preview.png",
];
