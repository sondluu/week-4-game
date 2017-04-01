//**************GAME STARTS
var win = 0;
var loss = 0;
var score = 0;

$(window).load(function(){


//random number is generated (19-120)
var theRandomNumber = function randomNumberGenerate(){
	return Math.floor((Math.random() * 120) + 19);
}
$("#randomNumber").html(theRandomNumber);
//
//random numbers behind cyrstals are also generated (1-12)
function generate(){
	return  Math.floor((Math.random()*12) + 1);
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
$("#crystalOne").click(function(){
	console.log(this);
	score=score+firstNumber;updateScore();
	
})

$("#crystalTwo").click(function(){
	console.log(this);
  	score=score+secondNumber;
  	updateScore();

})

$("#crystalThree").click(function(){
   console.log(this);
   	score=score+thirdNumber;
   	updateScore();

})

$("#crystalFour").click(function(){
   console.log(this);
   score=score+fourthNumber;
   updateScore();

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
//comment "You won!"
//
//Random number is reset to a new number
//
//All crystal numbers are also reset
if (score === theRandomNumber) {
	concole.log(this);
	win=win+1;
	$("#win").html(win);
	generate();
	randomNumberGenerate();
	score=0;
	updateScore();

} else if (score > theRandomNumber) {
	loss=loss+1;
	$("#loss").html(loss);
	generate();
	randomNumberGenerate();
	score=0;
	updateScore();
}

//
//
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

// Generates the number to guess.
// 	var number = Math.floor((Math.random() * 102) + 19);
// 	// Generates the values for each crystal.
// 	var blue = Math.floor((Math.random() * 12) + 1);
// 	var red = Math.floor((Math.random() * 12) + 1);
// 	var yellow = Math.floor((Math.random() * 12) + 1);
// 	var green = Math.floor((Math.random() * 12) + 1);
// 	// Setting initial values to 0.
// 	var guessTotal = 0;
// 	var wins = 0;
// 	var losses = 0;
// 	var currentStreak = 0;
// 	var longestStreak = 0;
// 	// Displays the number you need to guess on the page.
// 	$(".numberdisplay").html(number);
// 	// On click events for each crystal.
// 	$(".bluecrystal").click(function() {
// 		update(blue);
// 	});
// 	$(".redcrystal").click(function() {
// 		update(red);
// 	});
// 	$(".yellowcrystal").click(function() {
// 		update(yellow);
// 	});
// 	$(".greencrystal").click(function() {
// 		update(green);
// 	});
// 	$(".dropdown").click(function() {
// 		$(".instructions").toggle("slow");
// 	})
// 	// The reset function is called when you win or lose a game.
// 	function reset() {
// 		// Generates a new number to guess.
// 		number = Math.floor((Math.random() * 102) + 19);
// 		// Displays that number on the page.
// 		$(".numberdisplay").html(number);
// 		// Generates new values for the crystals.
// 		blue = Math.floor((Math.random() * 12) + 1);
// 		red = Math.floor((Math.random() * 12) + 1);
// 		yellow = Math.floor((Math.random() * 12) + 1);
// 		green = Math.floor((Math.random() * 12) + 1);
// 		// Resets the total guess to 0.
// 		guessTotal = 0;
// 		// Displays the guess total.
// 		$(".guessdisplay").html(guessTotal);
// 	};
// 	// This function updates the user's total guess. 
// 	function update(color) {
// 		// Increases the total guess by the value of the chosen crystal.
// 		guessTotal += color;
// 		// Removes the old total and replaces it with the new total. 
// 		$(".guessdisplay").empty();
// 		$(".guessdisplay").append(guessTotal);
// 		// Checks to see if you win or lose.
// 		if (guessTotal > number) {
// 			// Adds a loss.
// 			losses++;
// 			// Displays updated losses.
// 			$("#lossesdisplay").html(losses);
// 			// Calls the reset function to reset the game.
// 			reset();
// 			// Updates longest streak if it gets broken.
// 			if (currentStreak > longestStreak) {
// 				longestStreak = currentStreak;
// 			};
// 			// Resets current streak.
// 			currentStreak = 0
// 			// Displays the updated streak information.
// 			$("#currentstreakdisplay").html(currentStreak);
// 			$("#longeststreakdisplay").html(longestStreak);
// 		} else if (guessTotal == number) {
// 			// Adds a win.
// 			wins++;
// 			// Displays the updated wins.
// 			$("#winsdisplay").html(wins);
// 			// Calls the reset function to reset the game.
// 			reset();
// 			// Adds 1 to the current streak.
// 			currentStreak++;
// 			// Displays the current streak.
// 			$("#currentstreakdisplay").html(currentStreak);
// 			// Updates longest streak if it gets broken.
// 			if (currentStreak > longestStreak) {
// 				longestStreak = currentStreak;
// 			};
// 			// Displays the updated streak information.
// 			$("#longeststreakdisplay").html(longestStreak);
// 		};
// 	};












// 
});