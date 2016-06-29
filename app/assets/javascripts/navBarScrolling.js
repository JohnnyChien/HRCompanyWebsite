var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        $('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top floating-nav');
    } else {
        $('.navbar').removeClass('navbar-fixed-top floating-nav').addClass('navbar-static-top');
    }
  });
}
