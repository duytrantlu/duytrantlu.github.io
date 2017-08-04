$(document).ready(function(){	
	$('.connect-list').sortable({
	connectWith: ".connect-list",
	placeholder: "ui-state-highlight",
	start: function(event, ui){
		$(ui.item[0]).addClass('dragging');
	},
	stop: function(envent, ui){
		$(ui.item[0]).removeClass('dragging');
	}
});
});