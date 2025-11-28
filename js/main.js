$(".owl-carousel").owlCarousel({
      loop: true,       // Do not loop
      margin: 10,
      nav: true,         // optional next/prev buttons
      dots: false,
      autoplay: false,   // Disable auto-slide
      mouseDrag: true,   // Enable drag
      touchDrag: true,
      pullDrag: true,
      responsive:{
          0:{
              items:1.4
          },
          600:{
              items:2
          },
          1000:{
              items:3.5  // Show 3.5 items
          }
      }
  });


  