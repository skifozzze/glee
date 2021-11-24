$(function () {
  
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
    spacing: "3px",
    readOnly: true
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
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