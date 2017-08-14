$(document).ready(function(){
	//btn-toggle	
	$('.btn-toogle').click(function(e) {
		e.preventDefault();
		var content = $('.toogle-box');
		if ($(this).is('.active')) {
			$(this).removeClass('active');
			content.hide(0);
			return;
		}
		$(this).addClass('active');
		content.show(0);
		if (!content.is('.fdata')) {
			content.find('.getdt').each(function() {
				$(this).html($($(this).data('result')).html());
			});
			content.addClass('fdata');
		}
	});
	//điều chỉnh heder top menu
	$(window).scroll(function () {
		var e = $(window).scrollTop();
		if(e==0){
			$('.page-top').removeClass('fixed-top');
			$('body').css('padding-top', '0px');
			$('.btn-teach-on-global >span').css('background-color','#999999');
			$('.btn-teach-on-global >span').css('color','white');
			$('.btn-teach-on-global >span').hover(function(){
				$('.btn-teach-on-global >span').css('background-color','white');
				$('.btn-teach-on-global >span').css('color','black');
			},function(){
				$('.btn-teach-on-global >span').css('background-color','#999999');
				$('.btn-teach-on-global >span').css('color','white');
			})
		}
		else{	 		
			$('.page-top').addClass('fixed-top');
			$('body').css('padding-top', '90px');
			$('.btn-teach-on-global >span').css('background-color','white');
			$('.btn-teach-on-global >span').css('color','black');
			$('.btn-teach-on-global >span').hover(function(){
				$('.btn-teach-on-global >span').css('background-color','#999999');
				$('.btn-teach-on-global >span').css('color','white');
			},function(){
				$('.btn-teach-on-global >span').css('background-color','white');
				$('.btn-teach-on-global >span').css('color','black');
			})
		}

	});

	$('.dropdown-toggle').mouseover(function(){
		$('.megamenu').css('display','block');
	});
	$('.megamenu').mouseover(function(){
		$('.megamenu').css('display','block');
	});
	$('.megamenu').mouseout(function(){
		$('.megamenu').css('display','none');
	});
	//allcourese
	$('.all-courses').mouseover(function(){				
		$(".content:has(.overlay)").css('backgroundColor','#50C6D1'),
		$('.overlay').css('backgroundColor','#50C6D1'),
		$('.all-courses').css('transform','scale(1.1)');
	});
	$('.all-courses').mouseout(function(){
		$(".content:has(.overlay)").css('backgroundColor','rgba(128,128,128,1)'),
		$('.overlay').css('backgroundColor','rgba(128,128,128,1)'),
		$('.all-courses').css('transform','scale(1.0)');
	});
	//acounting
	$('.keepbooking').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)');
	});
	$('.keepbooking').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');
		;
	});
	//code
	$('.code').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)');
	});
	$('.code').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');
		;
	});
	//english
	$('.en').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)')
	});
	$('.en').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');
		;
	});
	//sale
	$('.sale').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)');
	});
	$('.sale').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');
	});
	//digital
	$('.digital').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)');
	});
	$('.digital').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');		
	});
	//founded
	$('.founded').mouseover(function(){				
		$(this).css("backgroundColor","#50C6D1"),
		$(this).css('transform','scale(1.1)');
	});
	$('.founded').mouseout(function(){
		$(this).css('backgroundColor','rgba(128,128,128,1)'),
		$(this).css('transform','scale(1.0)');		
	});
	//tạo popup khi màn hình nhỏ hơn 1000px
	$('.navbar-toggle').click(function(){
		$('.toogle-box').toggle();
	});
	//popup đăng ký đăng nhập
	re_call_regis_modal();
	var require_login = getParameterByName('return_url');
	 if (require_login != '') {
	    $('#link_login').attr('href', $('#link_login').attr('href') + '?return_url=' + require_login)
	    $('#link_login').trigger('click');
	  }
	//popup xem trước 1 video
	call_pop_lecture_preview();
	//set video mediaelement
	/*$('video,audio').css({
	      'width': '100%',
	      'height': '100%'
	    })
	    .attr('width', '100%').attr('height', '100%')
	    .mediaelementplayer({
	      videoWidth: -1,	      
	      videoHeight: -1
	    });*/
	//function xem thông tin chi tiết giảng viên
	
	 //xử lý faqs Down Up
	$('.faq-item').hover(function() {
    	$(this).children('.faq2').stop().slideDown();
  			}, function() {
    			$(this).children('.faq2').stop().slideUp();
  		});
	//xử lý thông báo
	$('.noti-message-btn').click(function(){
		if($('.prl').is('.open')){
			$('.prl').removeClass('open');
			return;			
		}
		else{
			$('.prl').addClass('open');
		}
	});
	//modal rating
	$('#rating-course').click(function(){
		$('#rating-modal').modal('show');
	});
	$('#send-feedback').click(function(){

	});
	/*sử lý khi hover vào các hình sao để rate*/
	//rating_callback
	$('.rating_callback').each(function() {
		obj = this;
		rating = $(this).children('.rating');
		rating.children('.glyphicon').css('cursor', 'pointer');
		rating.children('.glyphicon').hover(function() {
			index = $(this).index() + 1;
			for ($i = 0; $i < 5; $i++) {
				if ($i < index)
					rating.children('.glyphicon:eq(' + $i + ')').addClass('text-yel');
				else
					rating.children('.glyphicon:eq(' + $i + ')').removeClass('text-yel');
			}
		}).click(function() {
			index = $(this).index() + 1;
			$(obj).children('input').val(index);
		});
		rating.hover(function() {}, function() {
			index = $(obj).children('input').val();
			for ($i = 0; $i < 5; $i++) {
				if ($i < index)
					rating.children('.glyphicon:eq(' + $i + ')').addClass('text-yel');
				else
					rating.children('.glyphicon:eq(' + $i + ')').removeClass('text-yel');
			}
		});
	});
	//run carousel
	/*if ($('.instructors-slide').length > 0){
    $('.instructors-slide').owlCarousel({
      loop: true,
      margin: 15,
      responsiveClass: true,
      nav: true,
      dots: true,
      dot: true,
      responsive: {
        0: {
          items: 1,
          slideBy: 1
        },
        600: {
          items: 3,
          slideBy: 3
        },
        1000: {
          items: 5,
          slideBy: 5
        }
      }
    });
}*/
$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	nav:true,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});
});
//điều chỉnh menu của page các nhân hợp tác
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
//nút all trong all-course page
$(function() {
  // kick hoat nut ALL
  $('.btn-checkall[data-result]').click(function() {
  	$($(this).data('result')).find('[type="checkbox"]').each(function() {
  		$(this).prop('checked', true).parent().parent().addClass('active');
  	});

  });
});
function call_cate_checked(obj) {
  //index cua cate hien tai
  index = $(obj).parents('.item:eq(0)').index();  
  //bo lua chon cua cac cate khac
  if($('.btn-checkall.active').length==0){  	

  	($(obj).parent()).parent().toggleClass('active');

  }else {

  	($(obj).parent()).parent().toggleClass('active');



  }
}
//toggle ẩn hiện danh mục
$('.btn-next-toggle').click(function() {
	$(this).parent().next().toggleClass('hidden-xs hidden-sm');
	$(this).toggleClass('glyphicon-chevron-up').toggleClass('glyphicon-chevron-down');
});
//phần đăng ký đăng nhập popup
function re_call_regis_modal() {	
  $('a.get-regis-pop').each(function() {
    if (!$(this).is('[fancy]')) {
      $(this).addClass('fancybox.ajax').fancybox({
        maxWidth: 370,
        minWidth: 300,
        width: '90%',
        fitToView: false,
        autoSize: false,
        autoHeight: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'elastic',
        padding: 0,
        closeBtn: false
      });
      $(this).removeClass('get-regis-pop');
    }
  });
}
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    console.log(results);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));

}
//function xem trước 1 bài học
function call_pop_lecture_preview() {
  $('a.call_pop_lecture_preview').each(function() {
    $(this).removeClass('call_pop_lecture_preview')
      .addClass('fancybox.ajax')
      .fancybox({
        maxWidth: 980,
        minWidth: 300,
        minHeight: 400,
        height: '90%',
        width: '90%',
        fitToView: true,
        autoSize: false,
        autoHeight: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'elastic',
        padding: 0,
        closeBtn: true,
        tpl: {
          wrap: '<div class="fancybox-wrap pop-lecture-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
        }
      });
  });
}
//function xem chi tiết thông tin giảng viên
function call_intructor_popup() {
	console.log('the hell');
	$('a.call-intructor-popup').addClass('fancybox.ajax').fancybox({
	    maxWidth: 650,
	    minWidth: 300,
	    width: '90%',
	    fitToView: false,
	    autoSize: false,
	    autoHeight: true,
	    closeClick: false,
	    openEffect: 'none',
	    closeEffect: 'elastic',
	    padding: 0,
	    closeBtn: false,
  	});
}

