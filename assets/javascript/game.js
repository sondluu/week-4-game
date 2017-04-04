//**************GAME STARTS
var win = 0;
var loss = 0;
var score = 0;

$(window).load(function(){

//random number is generated (19-120)
var theRandomNumber = randomNumberGenerate();

function randomNumberGenerate(){
	return Math.floor((Math.random() * 120) + 19);
}
$("#randomNumber").html(theRandomNumber);
randomNumberGenerate();

//
//random numbers behind cyrstals are also generated (1-12)
function generate(){
	return Math.floor((Math.random()*12) + 1);
}
var firstNumber = generate();
var secondNumber = generate();
var thirdNumber = generate();
var fourthNumber = generate();

$("#numberOne").html("<p>" + firstNumber + "</p>");
$("#numberTwo").html("<p>" + secondNumber + "</p>");
$("#numberThree").html("<p>" + thirdNumber + "</p>");
$("#numberFour").html("<p>" + fourthNumber + "</p");

//
//user clicks a crystal, the random number behind that crystal will be added to score
$("#crystalOne").on("click",function(){
	console.log(this);
	score=score+firstNumber;
	updateScore();
	updateWinsAndLosses();
})

$("#crystalTwo").on("click",function(){
	console.log(this);
  	score=score+secondNumber;
  	updateScore();
	updateWinsAndLosses();
})

$("#crystalThree").on("click",function(){
   console.log(this);
   	score=score+thirdNumber;
   	updateScore();
	updateWinsAndLosses();
})

$("#crystalFour").on("click",function(){
   console.log(this);
   score=score+fourthNumber;
   updateScore();
   updateWinsAndLosses();
})

function updateScore(){
	$("#score").html(score);

}
// 
//**************USER CLICKS ON A CRYSTAL, CHANGES to win and loss counts:
//
//*****If the sum of all crystal numbers are added equal to score, 
//win goes up 1
//
//Random number is reset to a new number
//
//All crystal numbers are also reset

function updateWinsAndLosses(){
	if (score===theRandomNumber) {
	console.log("the score is", theRandomNumber);
	win++;
	$("#win").html(win);
	reset();
	score=0;
	updateScore();

//*****if the sum of all crystal numbers added is more than score, 
//
//then loss goes 1
//
//comment "You lost!"
//
//
//Random number is reset to a new number
//
//All crystal numbers are also reset

} else if (score > theRandomNumber) {
	loss=loss+1;
	$("#loss").html(loss);
	reset();
	score=0;
	updateScore();
}
}

//****** Update the randome number and all the crystal numbers

function reset(){
	theRandomNumber=Math.floor((Math.random() * 120) + 19);
	$("#randomNumber").html(theRandomNumber);
	firstNumber=Math.floor((Math.random()*12) + 1);
	secondNumber=Math.floor((Math.random()*12) + 1);
	thirdNumber=Math.floor((Math.random()*12) + 1);
	fourthNumber=Math.floor((Math.random()*12) + 1);
	$("#numberOne").html("<p>" + firstNumber + "</p>");
	$("#numberTwo").html("<p>" + secondNumber + "</p>");
	$("#numberThree").html("<p>" + thirdNumber + "</p>");
	$("#numberFour").html("<p>" + fourthNumber + "</p");
}




});









