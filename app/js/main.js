$(function () {



  $('.details-slide__small').slick({
    asNavFor: '.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.details-slide__big').slick({
    asNavFor: '.details-slide__small',
    draggable: false,
    arrows: false,
    fade: true
  });



  $('.related-slider').slick({    
    slidesToShow: 4,
    arrows: false,    
  })

  $('.prev').on('click', function() {
   $('.related-slider').slick('slickPrev');
  });

  $('.next').on('click', function() {
   $('.related-slider').slick('slickNext');
  });

  $('.prev__btn').on('click', function () {
    $('.prev__btn').addClass('prev__btn--active');
    $('.next__btn').removeClass('next__btn--active');
  })

  $('.next__btn').on('click', function () {
    $('.next__btn').addClass('next__btn--active');
    $('.prev__btn').removeClass('prev__btn--active');
  })



  $('.details-item__form-num').styler();


  $('.customer-pannel__link-cart').on('click', function () {
    $('.customer-pannel__link-cart').removeClass('customer-pannel__link-cart--active');
    $(this).addClass('customer-pannel__link-cart--active');
  })

  

  $('.details-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');
  })


   
  $('.price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.price__label-from').text(data.from);
      $('.price__label-to').text(data.to);
    },
    onChange: function (data) {
      $('.price__label-from').text(data.from);
      $('.price__label-to').text(data.to);
    },
  });



  $(".star").rateYo({    
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "7px",
    readOnly: true
  });

  $(".star-line").rateYo({    
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "13px",
    readOnly: true
  });



  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  });

  

  // var mixer = mixitup('.products__images');

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config); 

  
})