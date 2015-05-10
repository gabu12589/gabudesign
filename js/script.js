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
  $('#page-top').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $("#page-top").fadeIn();
    } else {
      $("#page-top").fadeOut();
    }
  });
  $('#page-top').click(function(){
    $('body,html').animate({
      scrollTop:0
    }, 500);
    return false;
  });
});

 $(function() {
    var navBox = $("#headbar");
    navBox.hide();
    var TargetPos = 500;
    $(window).scroll( function() {
       if( $(window).scrollTop() > TargetPos ) {
          navBox.fadeIn();
       }
       else {
          navBox.fadeOut();
       }
    });
 });
