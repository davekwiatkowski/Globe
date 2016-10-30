jQuery(document).ready(function ($) {
  $(".scroll").click(function (event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
  });

  $(window).scroll(function () {
    var mq = window.matchMedia("(min-width: 960px)");

    if (mq.matches && $(window).scrollTop() <= screen.height) {
      $("#splash").css({ "top": (-$(window).scrollTop()) + "px" });
    } else {
      $("#splash").css({ "top": "initial" });
    }

    if ($(window).scrollTop()  < screen.height * .8) {
      $("#not_globe").css({ "left": ($(window).scrollTop()) - screen.height + "px" });
      $("#not_globe").css({ "visibility": "visible" });
      $("#not_globe").css({ "-ms-visibility": "visible" });
      $("#not_globe").css({ "-moz-visibility": "visible" });
      $("#not_globe").css({ "-webkit-visibility": "visible" });
    } else if ($(window).scrollTop() >= screen.height*2.2) {
      $("#not_globe").css({ "left": -($(window).scrollTop()) + screen.height*2.2 + "px" });
      $("#not_globe").css({ "visibility": "visible" });
      $("#not_globe").css({ "-ms-visibility": "visible" });
      $("#not_globe").css({ "-moz-visibility": "visible" });
      $("#not_globe").css({ "-webkit-visibility": "visible" });
    } else {
      $("#not_globe").css({ "left": "initial" });
    }
  });
});