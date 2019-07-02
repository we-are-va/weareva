$(function() {
  
  var $hero_footer  = $('.layout-hero .hero-footer');
  var $form         = $("#contact-form");
  var $navbarLayout = $("#navbarLayout");

  


  // Mobile menu
  $navbarLayout.on('hidden.bs.collapse', function () {
    $("#toggle-main-menu").removeClass('is-active');
  });
  $navbarLayout.on('shown.bs.collapse', function () {
    $("#toggle-main-menu").addClass('is-active');
  });

  $navbarLayout.find('a').on('click tap press', function () {
    $navbarLayout.collapse('hide');
  });

  // ScrollReveal
  // window.sr = new ScrollReveal();
  // sr.reveal('section h2, .reveal, section header');
  // // Reveal in a ripple efffect
  // sr.reveal('.howwehelp-action', { duration: 800 }, 100);
  // sr.reveal('#contact .contact li, #whyparachute p, #wearewithyou p, #ourpromise p', { duration: 500 }, 50);
  
  // Scrollmagic


  $(".form-group input, .form-group textarea").focusout(function(){
      if($(this).val() === ""){
        $(this).parent().removeClass('focus');
      }
  }); 
  $('.form-group input, .form-group textarea').focus(function() {
    $(this).parent().addClass('focus');
  });

  $(function() {
  $('#main').smoothState();
  });

  //console.log("Welcome to VA BOOOOOOM!!!");
  console.log("##:::::'##:'########::::'###::::'########::'########:'##::::'##::::'###::::");
  console.log("##:'##: ##: ##.....::::'## ##::: ##.... ##: ##.....:: ##:::: ##:::'## ##:::");
  console.log("##: ##: ##: ##::::::::'##:. ##:: ##:::: ##: ##::::::: ##:::: ##::'##:. ##::");
  console.log("##: ##: ##: ######:::'##:::. ##: ########:: ######::: ##:::: ##:'##:::. ##:");
  console.log("##: ##: ##: ##...:::: #########: ##.. ##::: ##...::::. ##:: ##:: #########:");
  console.log("##: ##: ##: ##::::::: ##.... ##: ##::. ##:: ##::::::::. ## ##::: ##.... ##:");
  console.log(". ###. ###:: ########: ##:::: ##: ##:::. ##: ########:::. ###:::: ##:::: ##:");
  console.log(":...::...:::........::..:::::..::..:::::..::........:::::...:::::..:::::..::");

    // if($(window).width() >= 992) {
    //   $('#fullpage').fullpage({
    //     anchors:['section1','section2', 'section3'],
    //     scrollOverflow: true,
    //     autoScrolling:true,
    //     slideSelector: '',
    //     //css3:false
    //     normalScrollElements: '#intro'
    //   });
    // }

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img     = jQuery(this);
        var imgID    = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL   = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

    $('.carousel-item', '.show-neighbors').each(function(){
      var next = $(this).next();
      if (! next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
    }).each(function(){
      var prev = $(this).prev();
      if (! prev.length) {
        prev = $(this).siblings(':last');
      }
      prev.children(':nth-last-child(2)').clone().prependTo($(this));
    });


    // Play when in viewport
      $(window).on('scroll load', function(){
        $('.responsive-vid iframe').each( function(i){
          player.pauseVideo();
          var scroll_position = $(window).scrollTop();
          var bottom_of_video = $(this).offset().top + ($(this).outerHeight() / 2);
          var bottom_of_window3 = $(window).scrollTop() + $(window).height();
          if( bottom_of_window3 > bottom_of_video && scroll_position < bottom_of_video ) {  
            player.playVideo();
            $('#player').css({'opacity':'1'});
          } else {
            player.pauseVideo();
            $('#player').css({'opacity':'.6'});
          }
        });
      });


});
