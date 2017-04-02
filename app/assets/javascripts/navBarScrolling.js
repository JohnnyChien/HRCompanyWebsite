var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
        $('nav.navbar').addClass('floating-nav').removeClass('not-floating-navbar');
        $('ul.navbar-nav').addClass('floating-nav').removeClass('not-floating-navbar');
        $('#logo-text').addClass('floating-text').removeClass('not-floating-text');
        $('#logo-img').attr('src', 'assets/logo.png');
    } else {
        $('nav.navbar').removeClass('floating-nav').addClass('not-floating-navbar');
        $('ul.navbar-nav').removeClass('floating-nav').addClass('not-floating-navbar');
        $('#logo-text').removeClass('floating-text').addClass('not-floating-text');
        $('#logo-img').attr('src', 'assets/logo_white.png');
    }
  });
}
