$(function() {
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 300) {
      $(".cs-topnav").css({ top: "0px" });
    } else {
      $(".cs-topnav").css({ top: "-60px" });
    }
  });
});