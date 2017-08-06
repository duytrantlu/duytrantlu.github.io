$.fn.is_on_screen = function(){
	var win = $(window);
	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right ||    viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
//hàm chạy số khi đến nơi
$(window).scroll(function(){ // bind window scroll event
    if( $('.fact-timer').is_on_screen()) { // if target element is visible on screen after DOM loaded
    	/*count*/
    	$('.counter-select-number').each(function() {
    		var $this = $(this),
    		countTo = $this.attr('data-count');
    		$({ countNum: $this.text()}).animate({
    			countNum: countTo
    		},

    		{
    			duration: 4000,
    			easing:'linear',
    			step: function() {
    				$this.text(Math.floor(this.countNum));
    			},
    			complete: function() {
    				$this.text(this.countNum);
						      //alert('finished');
						  }
						});  
    	});
    } 
});