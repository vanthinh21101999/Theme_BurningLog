require(['jquery', 'jquery/ui', 'slick'], function($) {
   $(document).ready(function() {
       $('.banner-reason').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
       {
         breakpoint: 1280,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: false
         }
       },
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3
         }
       },
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         }
       }
     ]
    });
   });
});