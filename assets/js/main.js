$(document).ready(function () {
  // Show the modal on load
  $('#cashModal').modal('show');

let owlInitialized = false;

function initOwl() {
  if (owlInitialized) return;
  owlInitialized = true;

  const $carousel = $('.owl-contact');

  // Destroy if already initialized
  if ($carousel.hasClass('owl-loaded')) {
    $carousel.trigger('destroy.owl.carousel');
    $carousel.find('.owl-stage-outer').children().unwrap();
    $carousel.removeClass("owl-center owl-loaded owl-text-select-on");
  }

  $carousel.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    slideTransition: 'linear',
    autoplayHoverPause: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false
  });
}

$('#cashModal').on('hidden.bs.modal', function () {
//   videos.forEach(video => video.play());
  initOwl();

  // Immediately start sliding so no visible pause
  setTimeout(() => {
    $('.owl-contact').trigger('next.owl.carousel');
  }, 10);
});


  
});