var me;
	me=80;
	console.log(me);
	
var fruit="mango";
	console.log(fruit);
	
var a=40;
var b=60;
var c=a+b;
	console.log(c);
	
var firstName="Md.Imam";
var lastName="Uddin";
var age=40;
	console.log(firstName,lastName,"is",age,"years old");
	
var x=200;
var y=100;
if(x>y){
	console.log("I love my parents");
}

var taka=400;
if(taka>=400){
	console.log("Yes, you can buy a car");
}

var taka=300;
if(taka>=400){
	console.log("Yes,you can buy a bike");
}else{
	console.log("No, you can't buy a bike");
}

var taka=700;
var coupon=1;
if(taka>=800){
	console.log("I love my country");
}else if(coupon=1){
	console.log("Yes, you can buy a home");
}else{
	console.log("No, you can't buy this");
}

var day;
switch(new Date().getDay()){
	case 0:
		day="Friday";
		break;
	case 1:
		day="Saturday";
		break;
	case 2:
		day="Sunday";
		break;
	case 3:
		day="Monday";
		break;
	case 4:
		day="Tuesday";
		break;
	case 5:
		day="Wednesday";
		break;
	case 6:
		day="Thursday";
		break;
}
document.getElementById("imam").innerHTML="Today is " +day;