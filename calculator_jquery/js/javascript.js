$(document).ready(function () {
	var e=2.7;
	$(".Theme").hover(function(){
        $(".a").css("background-color", "black"),       
        $(".b").css("background-color", "pink"),
		$(".c").css("background-color", "#6f1d7b");
		$(".default").css("background-color", "#ddb50c");
    });
	//xử lý e
	$(".a").click(function(){
		$(".calculator").css("background-color","black");
	});
	$(".b").click(function(){
		$(".calculator").css("background-color","pink");
	});
	$(".c").click(function(){
		$(".calculator").css("background-color","#6f1d7b");
	});
	$(".default").click(function(){
		$(".calculator").css("background-color","#ddb50c");
	});
    //button click
    $(".number span").click(function(){
    	var y = $('.screen').val();
    	var x = $(this).text();
    	var newVar;
    	if(y==="0"){
    		newVar = x;
    	}
    	else {
    		newVar =y+x;
    	}
    	$('.screen').val(newVar);
    });

    //phép tính
    $(".feature .operator").click(function(){
    	var x = $(this).text();
    	var y = $('.screen').val();
    	y+=x;
    	$('.screen').val(y);
    });
    $(".feature .equal").click(function(){
    	var y = $('.screen').val();
    	var x= eval(y);
    	$('.screen').val(x);
    });
    $(".feature .del").click(function(){    	
    	var y = $('.screen').val();
    	if(y==="0"){

    	}
    	else{
	    	var x= y.substr(0,y.length-1);    		    	
	    	$('.screen').val(x);
	    	if(x.length==0){
	    		$('.screen').val("0");
	    	}

	    }
    });
     $(".feature .ac").click(function(){
    	var y = $('.screen').val();
    	var x= 0;   	
    	$('.screen').val(x);
    });
     $(".number .dot").click(function(){
     	var x=$(".screen").val();

     });
});