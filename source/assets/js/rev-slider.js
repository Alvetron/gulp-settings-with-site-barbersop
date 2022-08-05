$('.reviews__list').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: '<button class="reviews__next slick-arrow slick-prev" type="button">Предыдущий отзыв</button>',
  prevArrow: '<button class="reviews__prev" type="button">Следующий отзыв</button>',
  responsive: [
    {
      breakpoint: 640,
      settings: {
        arrows: false,
      }
    },
  ]
});


