var switchToNavFloatState = function() {
    $('nav.navbar').addClass('floating-nav').removeClass('not-floating-navbar');
    $('ul.navbar-nav').addClass('floating-nav').removeClass('not-floating-navbar');
    $('#logo-text').addClass('floating-text').removeClass('not-floating-text');
    $('.navbar-default .navbar-toggle .icon-bar').removeClass('not-floating').addClass('floating');
    // $('#logo-img').attr('src', '/assets/logo.png');
    $('#logo-white').addClass('hidden');
    $('#logo-black').removeClass('hidden');
}

var switchToNavNotFloatState = function() {
    $('nav.navbar').removeClass('floating-nav').addClass('not-floating-navbar');
    $('ul.navbar-nav').removeClass('floating-nav').addClass('not-floating-navbar');
    $('#logo-text').removeClass('floating-text').addClass('not-floating-text');
    $('.navbar-default .navbar-toggle .icon-bar').removeClass('floating').addClass('not-floating');
    // $('#logo-img').attr('src', '/assets/logo_white.png');
    $('#logo-white').removeClass('hidden');
    $('#logo-black').addClass('hidden');
}

var initNavbarScrolling = function() {
  $(document).scroll(function(e){
    // if($(window).width() > 576)
        var scrollTop = $(document).scrollTop();
        if(scrollTop > 0){
            switchToNavFloatState();
        } else {
          if($(window).width() > 576)
            switchToNavNotFloatState();
        }
    // }
  });
}

var resizeNavbarHandler = function() {
  $(window).resize(function() {
      if($(window).width() <= 576) {
          switchToNavFloatState();
      }
      else {
            var scrollTop = $(document).scrollTop();
            if(scrollTop > 0){
                switchToNavFloatState();
            } else {
                switchToNavNotFloatState();
            }
      }
  });
}

var initNavbarState = function() {
    if($(window).width() <= 576) {
        switchToNavFloatState();
    }
}


