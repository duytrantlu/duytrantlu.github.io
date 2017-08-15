//điều chỉnh heder top menu
	$(window).scroll(function () {
		var e = $(window).scrollTop();
		if(e>200){
			$('.navbar-inverse').addClass('after-scroll-wrap');	
		}
		else{	 		
			
			$('.navbar-inverse').removeClass('after-scroll-wrap');
		}			

	});