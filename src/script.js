$(document).ready(function(){
    $('.header-slider').slick({
      dots: true,
      arrows: false,
      // autoplay: true,
      
    });
});
      
$(document).ready(function(){
  $('.news-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  });
});