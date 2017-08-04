$(window).load(function() {
	if ($(window).width() <= 992) {
        set_toggleClass('.lecture-detail-body','full-mod');
        changeArrowIcon($('#full-mode-btn'));
        collapseProgress();        
    }
    set_lecturebody();
});
$(document).ready(function() {
    $('.expand-sidebar').click(function() {
        if ($('.lecture-detail-body').hasClass('full-mod')) {
            $('.lecture-detail-body').removeClass('full-mod');
            $('.progress-container').css('display','block');
            $('#full-mode-btn span').removeClass('glyphicon-triangle-left');
            $('#full-mode-btn span').addClass('glyphicon-triangle-right');
        }                
    });
});
function changeArrowIcon(btn) {
    if ($(btn).find('span.glyphicon').hasClass('glyphicon-triangle-right')) {
        $(btn).find('span.glyphicon').removeClass('glyphicon-triangle-right');
        $(btn).find('span.glyphicon').addClass('glyphicon-triangle-left');       
    } else {
        $(btn).find('span.glyphicon').removeClass('glyphicon-triangle-left');
        $(btn).find('span.glyphicon').addClass('glyphicon-triangle-right');
        expandProgress();
    }
    if($(window).width()<=375){
        console.log($('.full-mod').length);
        if ($('.full-mod').length==0) {
            $('.mejs__controls').hide();
        }
        else{
            $('.mejs__controls').show();
        }
    }
}

function collapseProgress() {
    $('.progress-container *').hide();
    $('.progress-container').css('padding-top', '3px');
    $('.progress-container').css('padding-bottom', '3px');
    $('.progress-container').css('background-color', '#2ebbc8');
}

function expandProgress() {
    $('.progress-container *').show();
    $('.progress-container').css('padding-top', '10px');
    $('.progress-container').css('padding-bottom', '10px');
    $('.progress-container').css('background-color', '#fff');
}

$(window).resize(function() {
    //lecture detail body size
    set_lecturebody();
  });

$(document).ready(function(){$('video, audio').mediaelementplayer();});
function set_lecturebody() {
  if ($('.lecture-detail-header').length == 0)
    return;
  wH = $(window).height();
  tH = $('.lecture-detail-header').innerHeight();
  bH = wH - tH;
  console.log(bH);
  vdmH = bH - 55;
  $('.lecture-detail-body,.lecture-detail-left,.lecture-detail-right,.ifpdf').height(bH);
  $('.lecture-video').css('max-height', vdmH + 'px');
  $('.ldl-body').height(bH - $('.ldl-header').innerHeight());
  if ($('.video-ft-pagi').length > 0) {
    $('.video-ft-pagi').animate({
      top: $('.lecture-video').innerHeight() + 30,
      opacity: 1
    }, 300);
  }
  $('.lecture-video').resize(function() {
    $('.video-ft-pagi').stop().animate({
      top: $('.lecture-video').innerHeight() + 30,
      opacity: 1
    }, 300);
  });
}
//update
function set_lecturebody() {
  if ($('.lecture-detail-header').length == 0)
    return;
  wH = $(window).height();
  tH = $('.lecture-detail-header').innerHeight();
  bH = wH - tH;
  if(bH>601){
    bH=500;
  }
  vdmH = bH - 75;  
  $('.lecture-detail-body,.lecture-detail-left,.lecture-detail-right,.ifpdf,.ldt-main').height(bH);
  $('.lecture-video').css('height', vdmH + 'px');
  $('.ldl-body').height(bH - $('.ldl-header').innerHeight());
  if ($('.video-ft-pagi').length > 0) {
    $('.video-ft-pagi').animate({
      top: $('.lecture-video').innerHeight() + 30,
      opacity: 1
    }, 300);
  }
  $('.lecture-video').resize(function() {
    $('.video-ft-pagi').stop().animate({
      top: $('.lecture-video').innerHeight() + 30,
      opacity: 1
    }, 300);
  });
}
$(function() {  
  if ($('.lecture-detail-body').length > 0) {   
    ww = $(window).width();
    if (ww < 700) {
      $('.lecture-detail-body').removeClass('full-mod');
    }
    $(window).resize(function() {
      ww = $(window).width();
      if (ww < 700) {
        $('.lecture-detail-body').removeClass('full-mod');
      }
    });
    $('.lecture-detail-left').click(function() {
      if ($(window).width() < 700) {
        $('.lecture-detail-body').addClass('full-mod');
      }
    });
  }
});


function set_toggleClass(obj, cl) {
     $(obj).toggleClass(cl);     
}
function setIntroVideo() {
  $('.course-intro-video .lecture-video').css('width', $('.course-intro-video').width());
  $('.course-intro-video .lecture-video').css('height', '312px');
  $('.course-intro-video .mejs-poster, .course-intro-video .mejs-overlay').css('width', '100%');
  $('.course-intro-video .mejs-poster, .course-intro-video .mejs-overlay').css('height', '100%');
}
$(document).ready(function() {
  setIntroVideo();
  $(window).resize(function() {
    setIntroVideo();
  });
});