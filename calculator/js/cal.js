function seven () {
	var x= document.getElementsByName('seven')[0].value;
	document.getElementById('result').value +=x;
}
function eight () {
	var x= document.getElementsByName('eight')[0].value;
	document.getElementById('result').value +=x;
}
function nine () {
	var x= document.getElementsByName('nine')[0].value;
	document.getElementById('result').value +=x;
}
function six () {
	var x= document.getElementsByName('six')[0].value;
	document.getElementById('result').value +=x;
}
function five () {
	var x= document.getElementsByName('five')[0].value;
	document.getElementById('result').value +=x;
}
function four () {
	var x= document.getElementsByName('four')[0].value;
	document.getElementById('result').value +=x;
}
function three () {
	var x= document.getElementsByName('three')[0].value;
	document.getElementById('result').value +=x;
}
function two () {
	var x= document.getElementsByName('two')[0].value;
	document.getElementById('result').value +=x;
}
function one () {
	var x= document.getElementsByName('one')[0].value;
	document.getElementById('result').value +=x;
}
function zero () {
	var x= document.getElementsByName('zero')[0].value;
	document.getElementById('result').value +=x;
}
function dot () {
	var x= document.getElementsByName('dot')[0].value;
	document.getElementById('result').value +=x;
}
function mul () {
	var x= document.getElementsByName('mul')[0].value;
	document.getElementById('result').value +=x;
}
function sub () {
	var x= document.getElementsByName('sub')[0].value;
	document.getElementById('result').value +=x;
}
function sum () {
	var x= document.getElementsByName('sum')[0].value;
	document.getElementById('result').value +=x;
}
function div () {
	var x= document.getElementsByName('div')[0].value;
	document.getElementById('result').value +=x;
}
function equal (argument) {
	var x =document.getElementById('result').value;
	x= eval(x);
	document.getElementById('result').value=x;
}
function ac () {
	document.getElementById('result').value ="";
}
function del (){
	var x=document.getElementById('result').value;
	var y = x.substr(0, x.length-1);
	document.getElementById('result').value =y; 
}
function binhPhuong() {
	var x=document.getElementById('result').value;
	var y = x*x;
	 document.getElementById('result').value =y;
}
function can2() {
	var x=document.getElementById('result').value;
	var y = Math.sqrt(x);
	 document.getElementById('result').value =y;
}
function giaiThua() {
	var x=document.getElementById('result').value;
	
	function tinh (x) {
		if (x==0)
		return 1;
		return x*tinh(x-1);
	}
	 document.getElementById('result').value = tinh(x);
}