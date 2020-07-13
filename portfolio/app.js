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
