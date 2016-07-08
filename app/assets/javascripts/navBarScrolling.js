var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        $('.navbar').addClass('floating-nav').removeClass('not-floating-navbar');
    } else {
        $('.navbar').removeClass('floating-nav').addClass('not-floating-navbar');
    }
  });
}
