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
	//modal login
	$('#link_login').click(function(){
		$("#login").modal('show');
	});
	$('#link_login-mb').click(function(){
		if ($('.btn-toogle').is('.active'))
	      $('.btn-toogle').removeClass('active');
		$('.toogle-box').css('display','none'),
		$("#login").modal('show');
		
	});
	//modal sign up
	$('#link_signup').click(function(){
		$("#signup").modal('show');
	});
	$('#link_singup-mb').click(function(){
		if ($('.btn-toogle').is('.active'))
	      $('.btn-toogle').removeClass('active');
		$('.toogle-box').css('display','none'),
		$("#signup").modal('show');
		
	});
	//mobile momal login

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
})
});