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
/**** GLOBAL :: SCROLL PAGE UP  ****/
	if ( (jQuery(window).width()>=767) ) {
		// hide #back-top first
		jQuery("#scrollbkToTop").hide();
		jQuery( "body" ).append( "<p id=\"scrollbkToTop\" style=\"display: none;\"><a href=\"#top\"><span> <i class=\"fa fa-arrow-up footer-go-uplink\"></i></span></a></p>" );
		
		// fade in #back-top
		jQuery(function () {
			jQuery(window).on("scroll",function() {
				if (jQuery(this).scrollTop() > 150) {
					jQuery('#scrollbkToTop').fadeIn();
				} else {
					jQuery('#scrollbkToTop').fadeOut();
				}
			});
		
			// scroll body to 0px on click
			jQuery('#scrollbkToTop a').on("click",function() { 
				jQuery('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
	}