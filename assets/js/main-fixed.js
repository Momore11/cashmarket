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

  // Function to play the first video immediately
  function playFirstVideo() {
    const firstVideo = document.querySelector('.swiper_slide video');
    if (firstVideo) {
      firstVideo.play().catch(e => {
        console.log('Autoplay prevented:', e);
        // If autoplay is prevented, try muted autoplay
        firstVideo.muted = true;
        firstVideo.play().catch(e => console.log('Still cannot play:', e));
      });
    }
  }

  // Enhanced modal close handler
  $('#cashModal').on('hidden.bs.modal', function () {
    // Initialize owl carousel
    initOwl();
    
    // Immediately start sliding
    setTimeout(() => {
      $('.owl-contact').trigger('next.owl.carousel');
    }, 10);

    // After 2 seconds, play the first video automatically
    setTimeout(() => {
      playFirstVideo();
    }, 2000);
  });

  // Handle manual close button clicks
  $('.modal-close, [data-bs-dismiss="modal"]').on('click', function() {
    // Trigger video autoplay after 2 seconds
    setTimeout(() => {
      playFirstVideo();
    }, 2000);
  });
});
