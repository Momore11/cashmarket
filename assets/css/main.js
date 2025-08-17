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


  // Fallback if modal not shown or auto-closed
  setTimeout(() => {
    if (!owlInitialized && !$('#cashModal').hasClass('show')) {
      initOwl();
    }
  }, 5000); // fallback after 5 seconds

  document.querySelectorAll('.swiper-slide').forEach(slide => {
  slide.addEventListener('click', (e) => {
    const rect = slide.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const halfWidth = rect.width / 2;

    if (clickX < halfWidth) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  });
});


  const swiper = new Swiper(".mySwiper", {
  effect: "fade",
  fadeEffect: { crossFade: true },
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: false,
  autoHeight: true,
  speed: 800,
  direction: "vertical",
  pagination: {
    el: ".custom-swiper-pagination",
    clickable: true,
    type: "bullets", // shows dots
  },
  breakpoints: {
    0: { direction: "horizontal" },
    992: { direction: "vertical" },
  },
  on: {
    init: function () {
      updateFraction(this);
    },
    slideChange: function () {
        console.log("slide calling");
        // const allVideos = document.querySelectorAll('.my-video');
        // allVideos.forEach((video, index) => {
        //    video.pause();
        //
        // });
        // updateFraction(this);

        //temp code start
        const videos = document.querySelectorAll('.my-video');
        const playPauseBtns = document.querySelectorAll('.video-play-pause');

        videos.forEach((video, index) => {
            if (index === this.activeIndex) {
                video.muted = false;
                video.pause();
                video.currentTime = 0;
                playPauseBtns[index].classList.remove('hide');
                playPauseBtns[index].querySelector('.play-icon').style.display = '';
                playPauseBtns[index].querySelector('.pause-icon').style.display = 'none';
            } else {
                video.pause();
                //  video.muted = true;
                playPauseBtns[index].classList.remove('hide');
                playPauseBtns[index].querySelector('.play-icon').style.display = '';
                playPauseBtns[index].querySelector('.pause-icon').style.display = 'none';
            }
            if (index === 0) {
                video.muted = false;
            } else {
                video.pause();
                //video.muted = true;
                playPauseBtns[index].classList.remove('hide');
            }
        });
        //temp code ends
        updateFraction(this);
    }
  }
});

// Function to update "current / total"
function updateFraction(swiperInstance) {
  const current = swiperInstance.realIndex + 1; // real index starts from 0
  const total = swiperInstance.slides.length;
  document.getElementById("custom-fraction").textContent = `${current} / ${total}`;
}


// Disable right-click
  // document.addEventListener('contextmenu', event => event.preventDefault());

  // // Block dev tools keys
  // document.addEventListener('keydown', function (e) {
  //   if (
  //     e.key === 'F12' ||
  //     (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
  //     (e.ctrlKey && e.key === 'U')
  //   ) {
  //     e.preventDefault();
  //     e.stopPropagation();
  //     return false;
  //   }
  // });

  // Optional: Block dragging content
  // document.addEventListener('dragstart', event => event.preventDefault());

});










