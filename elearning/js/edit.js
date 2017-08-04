$('ul.nav-of-setting li a').click(function (e) {
	if($(this).parent().hasClass('active')){
	}
	else{
		$('div.tab-content.nav-setting div.active').removeClass('active');
		$('div.tab-content.nav-picture div.active').removeClass('active');
		$('div.tab-content.nav-privacy div.active').removeClass('active');
		$('div.tab-content.nav-notifications div.active').removeClass('active');
	}
});
$('ul.nav-of-all-edit li a').click(function(){    
    if($(this).parent().hasClass('active')){

    }
    else{
        $('div.tab-content.edit-of-app #setting.active').removeClass('active');
        $('div.tab-content.edit-of-emailPassword #emailPassword.active').removeClass('active');
        $('div.tab-content.edit-of-interest #interest.active').removeClass('active');
    }
})
function img_of_user_click(obj){
    $('div.tab-content .nav-of-setting li.active').removeClass('active');
    $('div.tab-content .nav-of-setting li.img-click-show-edit').addClass('active');
    $('div.tab-content.nav-setting div.active').removeClass('active');
    $('div.tab-content.nav-picture div.active').removeClass('active');
    $('div.tab-content.nav-privacy div.active').removeClass('active');
    $('div.tab-content.nav-notifications div.active').removeClass('active');
    $('div.tab-content.nav-picture div#profile-picture').addClass('active');
}
function set_on_off_btn_2(obj) {
  if ($(obj).is(':checked')) {
    $(obj).parent().addClass('active');
    
  } else {
    $(obj).parent().removeClass('active');
    
  }
}
function call_valild_len(obj, len) {
  val = $(obj).val();
  cl = len - val.length;
  if (cl < 0) {
    val = val.substr(0, 80);
    $(obj).val(val);
    cl = 0;
  }
  $(obj).next().text(cl);
}