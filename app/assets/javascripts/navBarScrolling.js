var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();

    if(scrollTop > 0){
        $('nav.navbar').addClass('floating-nav').removeClass('not-floating-navbar');
        $('ul.navbar-nav').addClass('floating-nav').removeClass('not-floating-navbar');
        $('#logo-text').addClass('floating-text').removeClass('not-floating-text');
        $('.navbar-default .navbar-toggle .icon-bar').removeClass('not-floating').addClass('floating');
        // $('#logo-img').attr('src', '/assets/logo.png');
        $('#logo-white').addClass('hidden');
        $('#logo-black').removeClass('hidden');

    } else {
        $('nav.navbar').removeClass('floating-nav').addClass('not-floating-navbar');
        $('ul.navbar-nav').removeClass('floating-nav').addClass('not-floating-navbar');
        $('#logo-text').removeClass('floating-text').addClass('not-floating-text');
        $('.navbar-default .navbar-toggle .icon-bar').removeClass('floating').addClass('not-floating');
        // $('#logo-img').attr('src', '/assets/logo_white.png');
        $('#logo-white').removeClass('hidden');
        $('#logo-black').addClass('hidden');
    }
  });
}
