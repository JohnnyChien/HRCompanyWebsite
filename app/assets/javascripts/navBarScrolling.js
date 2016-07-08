var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        $('.navbar').addClass('floating-nav');
    } else {
        $('.navbar').removeClass('floating-nav');
    }
  });
}
