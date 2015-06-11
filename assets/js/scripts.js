
// Our works image Overlay 
$(document).ready(function(){
  "use strict";
  // handle the mouseenter functionality
  $(".gallery-img").mouseenter(function(){
      $(this).addClass("hover");
  })
  // handle the mouseleave functionality
  .mouseleave(function(){
      $(this).removeClass("hover");
  });
});
// Our works image Overlay 

// Right pagination Sliders height
$(document).ready(function() {
  "use strict"
  slideImagesHeight();
});
function slideImagesHeight() {
  "use strict"
  var height = $("#top-slider").outerHeight() / 4;
  $("header div.sliders").css("height",height);
}

// Right pagination Sliders height

// Owl fire plugin
$(document).ready(function() {
  $("#top-slider").owlCarousel({
      autoPlay: 5000,
      navigation : false, 
      slideSpeed : 300,
      pagination : true,
      singleItem:true,
      stopOnHover : true,
      transitionStyle : "goDown",
      afterUpdate : function() {
        slideImagesHeight();
      },
      afterInit: function(){
        var windowHeight = $( window ).outerHeight();
        $(".owl-carousel .owl-item").css("max-height",windowHeight - 96);
        setTimeout(slideImagesHeight, 1000);
        $(".owl-pagination .owl-page").each(function(indexPage){
          var $owlPage = $(this);
          $(".slider-wrapper .sliders").each(function(indexSlider){
            var $slider = $(this);
            if($owlPage.hasClass("active")) {
              $slider.addClass("active-slide");
              return false;
            }
          });
        });
      },
      afterMove: function(){
        $(".owl-pagination .owl-page").each(function(indexPage){
          var $owlPage = $(this);
            if($owlPage.hasClass("active")) {
              $(".slider-wrapper").find(".sliders")
                                    .eq(indexPage)
                                      .addClass("active-slide")
                                        .siblings(".sliders")
                                         .removeClass("active-slide");
              return false;
            }
        });
      }
  });

  $("#twitter-slider").owlCarousel({
      autoPlay: 5000,
      navigationText : ['<i class="fa fa-chevron-circle-left"></i>','<i class="fa fa-chevron-circle-right"></i>'],
      navigation : true,
      slideSpeed : 300,
      paginationSpeed : 400,
      paginationNumbers : false,
      singleItem:true
  });
});
// Owl fire plugin

// Right pagination More Info config
$(document).ready(function() {
  "use strict";
  $("#header-slider .sliders").find(".slider-link").each(function(index){
    $(this).click(function(e){
      e.preventDefault();
      e.stopPropagation();
      $(".owl-pagination .owl-page").eq(index).find("span").trigger('touchend');
      $(this).parent().addClass("active-slide").siblings(".sliders").removeClass("active-slide");
    });
  });
});
// Right pagination More Info config

// Top navigation menu
$(document).ready(function() {
  "use strict";
  var $menuRight = $('#cbp-spmenu-s2'),
  $mainMenu = $("#mainMenu"),
  $body = $("body");
  $mainMenu.on("click",function() {
    $(this).toggleClass('active');
    $body.toggleClass('cbp-spmenu-push-toleft' );
    $menuRight.toggleClass('cbp-spmenu-open' );
    $(this).fadeOut("fast");
    $("nav button.main-menu-in").fadeIn("slow");
  });

  // If clicked not on the menu
  $(document).mouseup(function (e) {
    var container = $("#mainMenu, nav a");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $mainMenu.removeClass('active').fadeIn("slow");
      $("nav button.main-menu-in").fadeOut("slow");
      $body.removeClass('cbp-spmenu-push-toleft' );
      $menuRight.removeClass('cbp-spmenu-open' );
    }
  });
});
// Top navigation menu

// Animate scroll
$(document).ready(function() {
  "use strict";
  $("nav a, .button-container a").click(function(){
    var menuId = $(this).attr("href");
    $("html, body").animate({scrollTop: $(menuId).offset().top}, "slow" );
    return false;
  });
});
// Animate scroll

// Parallax
  //$('.parallax-window').parallax({imageSrc: 'assets/img/parallax/parallax-1.jpg'});
// Parallax

// Wow 
wowSections = new WOW( {
  boxClass:     'wow',
  offset:       150,
  mobile:       true,
  live:         true
})
wowSections.init();
// Wow 
