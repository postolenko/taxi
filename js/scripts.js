function getAnimation() {
  $(".animate").each(function() {
    if( $(this).offset().top <= $(document).scrollTop() + $(window).height() ) {
      $(this).addClass("active");
    }
  });
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock, dropdowmBlock;
var tabsName, activeTab, activeTabLink;

$(window).resize(function() {
    getAnimation();
});

$(document).scroll(function() {
    getAnimation();
});

$(document).ready(function() {
    getAnimation();

    if( $(".resp_slider").length > 0 ) {
        $(".resp_slider").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".slider_1").length > 0 ) {
        $(".slider_1").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
            infinite: false,
            responsive: [
                {
                  breakpoint: 1170,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
    }

    if( $(".slider_2").length > 0 ) {
        $(".slider_2").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        });
    }

    if( $(".slider_3").length > 0 ) {
        $(".slider_3").not(".slick-initialized").slick({
            dots: true,
            arrows: false,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2,
            appendDots: $(".slider_3_controls"),
            responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
    }

    // -------

    $(".accordeon_item").each(function() {
      if($(this).hasClass("active")) {
        $(this).find(".accordeon_item_descript").css({
          "display" : "block"
        });
      }
    });

    $(".accordeon_item_title").on("click", function(e) {
      e.preventDefault();
      parentBlock = $(this).closest(".accordeon_item");
      dropdowmBlock = parentBlock.find(".accordeon_item_descript");
      if(dropdowmBlock.is(":hidden")) {
        dropdowmBlock.slideDown(300);
        parentBlock.addClass("active");
      } else {
        dropdowmBlock.slideUp(300,function() {
          parentBlock.removeClass("active");
        });
      }
    });

    // ---------------------
    $("[data-popup-link]").on("click", function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      $("body").addClass("fixed");
      $("body").css({
          "position" : "fixed",
          "top" :  -$(document).scrollTop() + "px",
          "overflow" : "hidden",
          "right" : 0,
          "left" : 0,
          "bottom" : 0,
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").attr("style", "");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").removeClass("fixed");
      $(".popup_bg").fadeOut(300);
      $(this).closest("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 ) {
          curTop = $("body").css("top");
          curTop = Math.abs(parseInt(curTop, 10));
          $("body").attr("style", "");
          if (curTop !== 0) {
              $("html").scrollTop(curTop);
          }
          $("body").removeClass("fixed");
          $(".popup_bg").fadeOut(300);
          $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
        if($(".popup").is(":visible")) {
          e.preventDefault();
          hide_element = $(".popup_content");
          if (!hide_element.is(e.target)
              && hide_element.has(e.target).length === 0) {
              curTop = $("body").css("top");
              curTop = Math.abs(parseInt(curTop, 10));
              $("body").attr("style", "");
              if (curTop !== 0) {
                  $("html").scrollTop(curTop);
              }
              $("body").removeClass("fixed");
              $(".popup_bg").fadeOut(300);
              $("[data-popup]").fadeOut(300);
          }
        }
    });

    // ------------

    $(".tab_link").on("click", function() {
      parentBlock = $(this).closest(".tabs_links");
      parentBlock.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    $("[data-tab-content]").each(function() {
      tabsName = $(this).attr("data-tab-content");
      $("[data-tabs = '"+tabsName+"'] .tab_link").each(function() {
        if($(this).hasClass("active")) {
          activeTab = $(this).find("label").attr("for");
          return false;
        } else {
          parentBlock = $(this).closest(".tabs_links");
          activeTab = parentBlock.find(".tab_link:eq(0) label").attr("for");
        }
      });
      activeTabLink = $("[data-tabs = '"+tabsName+"'] [for = '"+activeTab+"']").closest(".tab_link");
      activeTabLink.addClass("active");
      $("#"+activeTab).prop("checked", true);
    });

});