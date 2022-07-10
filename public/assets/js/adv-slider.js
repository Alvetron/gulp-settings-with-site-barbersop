if(document.querySelector("body").clientWidth < 640) {
  $('.advantages__list').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
}
