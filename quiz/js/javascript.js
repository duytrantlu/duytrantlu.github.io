var question1 = {
	question:"Quốc gia nào vô địch World Cup 2014?",
	ans1:"Bồ Đào Nha",
	ans2:"Đức",
	ans3:"Brazil",
	result:"ans1"
};

var question2 = {
	question:"World Cup 2018 sẽ được tổ chức ở đâu?",
	ans1:"Việt Nam",
	ans2:"Nga",
	ans3:"Hà Lan",
	result:"ans2"
};
var question3 = {
	question:"Quốc gia vô địch World Cup 2010 ?",
	ans1:"Tây Ban Nha",
	ans2:"Nam Phi",
	ans3:"Hà Lan",
	result:"ans1"
};
var question4 = {
	question:"Quốc gia vô địch World Cup 2006 ?",
	ans1:"Ý",
	ans2:"Đức",
	ans3:"Bồ Đào Nha",
	result:"ans2"
};
var question5 = {
	question:"Quốc gia vô địch World Cup 2002 ?",
	ans1:"Hàn Quốc",
	ans2:"Brazil",
	ans3:"Anh",
	result:"ans2"
};
var arrQuestion =[question1,question2,question3,question4,question5];
var flag;
var score=0;
var count =1;
var scoreTotal=0;
var numberClick=0;
var max = arrQuestion.length;

var answer = document.querySelectorAll(".answer span");

function resetColor () {
	for(var i=0; i<answer.length;i++){
		answer[i].style.backgroundColor = "#cccccc";
	}
}
function changeColor (button) {
	resetColor();
	button.style.backgroundColor = "#66CCFF";
	flag= button.className;
	document.getElementsByClassName("choose")[0].disabled=false;
}
function correctAns (arg) {
	if(arg == arrQuestion[count-1].result){
		score+=1;
	}
	else{
		score+=0;
	}
	return score;
}
function nextButton () {
	scoreTotal = correctAns(flag);
	resetColor();
	numberClick++;	
	if(numberClick<max){
		document.getElementsByClassName("question")[0].innerHTML=arrQuestion[count].question;
		document.getElementsByClassName("ans1")[0].innerHTML = arrQuestion[count].ans1;
		document.getElementsByClassName("ans2")[0].innerHTML = arrQuestion[count].ans2;
		document.getElementsByClassName("ans3")[0].innerHTML = arrQuestion[count].ans3;
		count++;
		document.getElementsByClassName("choose")[0].disabled=true;
	}
	else{
		if(scoreTotal == max){
			window.location.href="win.html";
		}
	else{
		window.location.href ="lose.html";
		}
	}
	
}
function choiLai () {
	window.location.href="index.html";
}
