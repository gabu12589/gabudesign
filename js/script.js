new WOW().init();

$(function(){
  $("#menu").slicknav;
});

$(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});

$(function(){
  var pageTop = $("#page-top");

  pageTop.hide();

  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 200) {
      pageTop.fadeIn();
    } else {
      pageTop.fadeOut();
    }
  });
});