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

  const options = {
    direction: 'vertical', // string horizontal & vertical
    width: 700, // integer defaults to max-width: 100%; via CSS
    height: 450, // integer defaults to height: auto; via CSS
    initial: 30, // integer default = 30px (initial position for slider in px)
    filter: {
      active: true, // boolean
      effect:
        'grayscale(200%)' /* url, blur, brightness, contrast, drop-shadow, grayscale, hue-rotate, invert, opacity, saturate, sepia */,
    },
  }

  const container = document.getElementById('img-comparison')

  const mySlider = new Cato(options, container)

  mySlider.createSlider()

  //  var aniNextLink = function(callback) {
    
  //      $('.next-work').addClass('animated');

  //  }
  // $('.PageNavigation a').on('click', function(e) {
  //     e.preventDefault();
      
  //     var url = $(e.currentTarget).attr('href');
  //     aniNextLink(function() {
  //         alert('go to ' + url);
  //         window.location.href = 'http://www.google.com';
  //     });
  // });

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

  // $(function() {
  //   $('#pagetransition').smoothState({ debug: true });
  // });
  // $(function(){
  //   'use strict';
  //   var $page = $('#pagetransition'),
  //       options = {
  //         debug: true,
  //         prefetch: true,
  //         cacheLength: 2,
  //         onStart: {
  //           duration: 250, // Duration of our animation
  //           render: function ($container) {
  //             // Add your CSS animation reversing class
  //             $container.addClass('is-exiting');
  //             // Restart your animation
  //             smoothState.restartCSSAnimations();
  //           }
  //         },
  //         onReady: {
  //           duration: 0,
  //           render: function ($container, $newContent) {
  //             // Remove your CSS animation reversing class
  //             $container.removeClass('is-exiting');
  //             // Inject the new content
  //             $container.html($newContent);
  //           }
  //         }
  //       },
  //       smoothState = $page.smoothState(options).data('smoothState');
  // });

  console.log("Welcome to VA BOOOOOOM!!!");
  // console.log("##:::::'##:'########::::'###::::'########::'########:'##::::'##::::'###::::");
  // console.log("##:'##: ##: ##.....::::'## ##::: ##.... ##: ##.....:: ##:::: ##:::'## ##:::");
  // console.log("##: ##: ##: ##::::::::'##:. ##:: ##:::: ##: ##::::::: ##:::: ##::'##:. ##::");
  // console.log("##: ##: ##: ######:::'##:::. ##: ########:: ######::: ##:::: ##:'##:::. ##:");
  // console.log("##: ##: ##: ##...:::: #########: ##.. ##::: ##...::::. ##:: ##:: #########:");
  // console.log("##: ##: ##: ##::::::: ##.... ##: ##::. ##:: ##::::::::. ## ##::: ##.... ##:");
  // console.log(". ###. ###:: ########: ##:::: ##: ##:::. ##: ########:::. ###:::: ##:::: ##:");
  // console.log(":...::...:::........::..:::::..::..:::::..::........:::::...:::::..:::::..::");

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


      var vids = $("video"); 
      $.each(vids, function(){
             this.controls = false; 
      }); 


});
