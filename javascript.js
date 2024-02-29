var pocket;
	pocket=35;
	console.log(pocket);


var firstName;
	firstName="Imam";
	console.log(firstName);


var fruits="Mango";
	console.log(fruits);

var a=8;
var b=6;
var c=a+b;
	console.log(c);

var firstname="imam";
var lastName="Uddin";
var age="41";
	console.log(firstname,"",lastName,"is",age,"", "years old");

var x=50;
var y=30;
if(x>y){
	console.log("It's right then all is correct thats I wiil write.")
	console.log("I love my parents.");
}

var taka=300;
if(taka>=200){
	console.log("Yes,you can buy a car.");
}

var tk=100;
if(tk>=200){
	console.log("Yes, you can buy a car");
}else{
	console.log("No, you can't buy a car.");
}

var take=100;
var coupon=1;
if(take>=200){
	console.log("Yes,You can by a car.");
}else if(coupon=1){
	console.log("Yes,you can by a car with yuor coupon.")
}else{
	console.log("No, you can't buy a car.")
}

var day;
switch(new Date().getDay()){
	case 0:
		day="Saturday";
		break;
	case 1:
		day="sunday";
		break;
	case 2:
		day="Monday";
		break;
	case 3:
		day="Tuesday";
		break;
	case 4:
		day="Wesnesday";
		break;
	case 5:
		day="Thursday";
		break;
	case 6:
		day="Friday";
		break;
}
document.getElementById("demo").innerHTML="Today is " + day;

var i=1;
for(i; i<=12; i++ ){
	console.log(i);
}
console.log(i);