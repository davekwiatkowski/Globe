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

    if ($(window).scrollTop() < screen.height) {
      if (mq.matches) {
        $("#not_globe").css({ "left": ($(window).scrollTop()) - screen.height + "px" });
        $("#not_globe").css({ "visibility": "visible" });
      }
      else $("#not_globe").css({ "visibility": "hidden" });
    } else if ($(window).scrollTop() >= screen.height * 3) {
      if (mq.matches) {
        $("#not_globe").css({ "left": -($(window).scrollTop()) + screen.height * 3 + "px" });
        $("#not_globe").css({ "visibility": "visible" });
      }
      else $("#not_globe").css({ "visibility": "hidden" });
    } else {
      if (!mq.matches)
        $("#not_globe").css({ "visibility": "visible" });
      $("#not_globe").css({ "left": "initial" });
    }
  });
});