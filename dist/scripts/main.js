$(function(){var o=($(".layout-hero .hero-footer"),$("#contact-form"),$("#navbarLayout"));o.on("hidden.bs.collapse",function(){$("#toggle-main-menu").removeClass("is-active")}),o.on("shown.bs.collapse",function(){$("#toggle-main-menu").addClass("is-active")}),o.find("a").on("click tap press",function(){o.collapse("hide")}),$(".form-group input, .form-group textarea").focusout(function(){""===$(this).val()&&$(this).parent().removeClass("focus")}),$(".form-group input, .form-group textarea").focus(function(){$(this).parent().addClass("focus")}),console.log("##:::::'##:'########::::'###::::'########::'########:'##::::'##::::'###::::"),console.log("##:'##: ##: ##.....::::'## ##::: ##.... ##: ##.....:: ##:::: ##:::'## ##:::"),console.log("##: ##: ##: ##::::::::'##:. ##:: ##:::: ##: ##::::::: ##:::: ##::'##:. ##::"),console.log("##: ##: ##: ######:::'##:::. ##: ########:: ######::: ##:::: ##:'##:::. ##:"),console.log("##: ##: ##: ##...:::: #########: ##.. ##::: ##...::::. ##:: ##:: #########:"),console.log("##: ##: ##: ##::::::: ##.... ##: ##::. ##:: ##::::::::. ## ##::: ##.... ##:"),console.log(". ###. ###:: ########: ##:::: ##: ##:::. ##: ########:::. ###:::: ##:::: ##:"),console.log(":...::...:::........::..:::::..::..:::::..::........:::::...:::::..:::::..::"),$("img.svg").each(function(){var o=jQuery(this),t=o.attr("id"),e=o.attr("class"),i=o.attr("src");$.get(i,function(i){var s=jQuery(i).find("svg");void 0!==t&&(s=s.attr("id",t)),void 0!==e&&(s=s.attr("class",e+" replaced-svg")),s=s.removeAttr("xmlns:a"),!s.attr("viewBox")&&s.attr("height")&&s.attr("width")&&s.attr("viewBox","0 0 "+s.attr("height")+" "+s.attr("width")),o.replaceWith(s)},"xml")}),$(".carousel-item",".show-neighbors").each(function(){var o=$(this).next();o.length||(o=$(this).siblings(":first")),o.children(":first-child").clone().appendTo($(this))}).each(function(){var o=$(this).prev();o.length||(o=$(this).siblings(":last")),o.children(":nth-last-child(2)").clone().prependTo($(this))}),$(window).on("scroll load",function(){$(".responsive-vid iframe").each(function(o){player.pauseVideo();var t=$(window).scrollTop(),e=$(this).offset().top+$(this).outerHeight()/2;$(window).scrollTop()+$(window).height()>e&&t<e?(player.playVideo(),$("#player").css({opacity:"1"})):(player.pauseVideo(),$("#player").css({opacity:".6"}))})})});
//# sourceMappingURL=main.js.map
