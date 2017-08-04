$(document).ready(function() {
  navbar_teach_spy();
  $(window).resize(function() {
    navbar_teach_spy();
  });
});
function navbar_teach_spy() {
  if ($('#navbar_teach_spy').length == 0)
    return;
  $('body').scrollspy({
    target: '#navbar_teach_spy',
    offset: 190
  });
  ww = $(window).width();
  $obj = $('#navbar_teach_spy');
  if (ww < 768) {
    $obj.removeAttr('style');
    $obj.css('display', 'none');
    return;
  }
  $pr = $obj.parents('.container:eq(0)');
  $obj.parent().css({
    'position': 'relative'
  });
  $(window).scroll(function() {
    wtop = $(window).scrollTop();
    $pr_top = $pr.offset().top - 55;
    $pr_bot = $pr_top + $pr.height() - $obj.height() - 135;
    if (wtop < $pr_top) {
      $obj.removeAttr('style');
      $('#navbar_teach_spy li:first-child').addClass('active');
    } else if (wtop > $pr_top && wtop < $pr_bot) {
      ttop = wtop - $pr_top + 60;
      $obj.stop().css({
        'position': 'absolute',
        'top': ttop + 'px',
        'left': '15px',
        'display': 'block'
      });
    }
  });
  $obj.find('a').unbind('click').click(function(e) {
    e.preventDefault();
    index = $(this).parent().index() - 1;
    id = $(this).attr('href');
    otop = $(id).offset().top - 110 - index * 42;
    ob = $(this);
    $('html,body').stop().animate({
      scrollTop: otop
    }, 500, function() {
      ob.parents('ul:eq(0)').children('.active').removeClass('active');
      ob.parent().addClass('active');
    });
  });
}