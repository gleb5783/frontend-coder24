$(function(){
  $('.exsample').slick({
  	arrows: true,
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow'),
    responsive: [
    {
      breakpoint: 990,
      settings: {
      	arrows: false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 560,
      settings: {
      	arrows: false,
        slidesToShow: 1,
        dots: true,
      }
    }
  ]
  });
 
});

