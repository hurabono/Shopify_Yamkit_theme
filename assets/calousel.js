$('.multiple-items').not('.slick-initialized').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.multiple-items-photo').not('.slick-initialized').slick({
    dots: true,
    infinite: false,
    prevArrow: false,
    nextArrow: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  // $('.product__media-list').not('.slick-initialized').slick({
  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: false,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 800,
  //       settings: "unslick"
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: "unslick"
  //     }
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ]
  // });
  

  $('.product__media-list').not('.slick-initialized').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    asNavFor: '.product__media-list2',
    responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]

  });

  $('.product__media-list2').not('.slick-initialized').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    arrows: false,
    asNavFor: '.product__media-list',
    dots: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          asNavFor: '.product__media-list',
          centerMode: false,
          focusOnSelect: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          asNavFor: '.product__media-list',
          centerMode: false,
          focusOnSelect: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          arrows: false,
          asNavFor: '.product__media-list',
          centerMode: false,
          focusOnSelect: true,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

