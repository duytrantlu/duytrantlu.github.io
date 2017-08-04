$(function() {
  resize_t_banner();
  scroll_fixed_header();
  ins_slide();
});
function scroll_fixed_header() {
  if ($('.page-top-co').length == 0 || $('.tt-banner-2,.tt-banner').length == 0)
    return;
  $header = $('.page-top-co');
  $bn = $('.tt-banner-2').length == 1 ? '.tt-banner-2' : '.tt-banner';
  $bn = $($bn);
  $(window).scroll(function() {
    $mintop = $bn.outerHeight() - 50;
    $wt = $(window).scrollTop();
    if ($wt > $mintop) {
      $header.stop().addClass('scrolling');
    } else {
      $header.stop().removeClass('scrolling');
    }
  });
};

function resize_t_banner() {
  if ($('.tt-banner-2,.tt-banner').length == 0)
    return;
  $bn = $('.tt-banner-2').length == 1 ? '.tt-banner-2' : '.tt-banner';
  $bn = $($bn);
  $wh = $(window).height();
  $ww = $(window).width();
  $bn.css('min-height', $wh + 'px');
  $(window).resize(function() {
    $wh = $(window).height();
    $ww = $(window).width();
    $bn.css('min-height', $wh + 'px');
  });
}
function ins_slide() {
  if ($('.ins-slide').length > 0)
    $('.ins-slide .inssay-item').removeClass('hidden');
  $('.ins-slide').owlCarousel({
    loop: true,
    margin: 15,
    responsiveClass: true,
    nav: false,
    dots: true,
    dot: true,
    responsive: {
      0: {
        items: 1,
        slideBy: 1
      },
      600: {
        items: 2,
        slideBy: 2
      },
      1000: {
        items: 3,
        slideBy: 3
      }
    }
  });
}