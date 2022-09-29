window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel_list'), {
        slidesToShow: 3,
        slidesToScroll: 3,
        draggable: false,
        dots: '.carousel_indicators',
        arrows: {
          prev: '.arrow_prev',
          next: '.arrow_next'
        }
      });
      responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 800,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            itemWidth: 150,
            duration: 0.25
          }
        }
      ]
})