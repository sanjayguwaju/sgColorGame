/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------IN THIS SECTION WE USE TO SELECT THE ELEMENTS , ID AND CLASSES----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

var numSquares = 6; //------------This is constant variable for choosing 6 colors in the array--------//
var colors = generateRandomColors(numSquares); //--------This RandomColors generated from function and It automatically puts colors in arrays
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor(); //--------This Code is used to pick different colors randomly--------------//
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1"); //-------Selecting h1--------//
var resetButton = document.querySelector("#reset"); //-------Selecting Reset Button---------//
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------BELOW EVENT LISTENER FUNCTION IS FOR EASY BUTTON----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");

	//Only produce arrays of colors for 3 colors
	numSquares = 3;
	//Generate Random Colors in the Stripe Bar
	colors = generateRandomColors(numSquares);
	//Pick New Random color from the array
	pickedColor = pickColor();
	//changeColor Display to match the picked Color
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

})

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------BELOW EVENT LISTENER FUNCTION IS HARD BUTTON----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected")

	//Only produce arrays of colors for 3 colors
	numSquares = 6;
	//Generate Random Colors in the Stripe Bar
	colors = generateRandomColors(numSquares);
	//Pick New Random color from the array
	pickedColor = pickColor();
	//changeColor Display to match the picked Color
	colorDisplay.textContent = pickedColor;

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
	}
})

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------BELOW FUNCTION IS FOR RESET BUTTON CALLED NEW COLORS----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

resetButton.addEventListener("click", function(){
	//Generate Random Colors in the Stripe Bar
	colors = generateRandomColors(numSquares); //---------Added num squares for to manage in which mode we are easy or hard-----//
	//Pick New Random color from the array
	pickedColor = pickColor();
	//changeColor Display to match the picked Color
	colorDisplay.textContent = pickedColor;

	//Display empty string try again or correct message
	messageDisplay.textContent = " ";

	//To Display Play Again only when player wins
	this.textContent  = "New Colors"
	//Change the color of Squares
	for (var i = 0 ; i < squares.length; i++) {
	 squares[i].style.background = colors[i];
	}
	//Adding background color to the Button
	h1.style.background = "steelblue";
})

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------BELOW FUNCTION IS TO ADD SQUARES AND GIVE THEM FUNCTIONALITY OF  CHANGING COLORS----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/

for(var i = 0; i < squares.length; i++){ 
	// add initial colors to squares
	squares[i].style.background = colors[i];

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			//alert("Correct!"); -------- [For Alert Purpose]----------//
			messageDisplay.textContent = "Correct !!!"; //------------To Display Message in the same text box where is Try again shows-----//
			resetButton.textContent = "Play Again !!!"; //------------To Display Play Again Message after finishing game in th Reset Button ---//
			changeColors(clickedColor);
			h1.style.background = clickedColor; //-----Background color will be same of h1 as the correct answer color------//
		} else {
			this.style.background = "#232323"; //---------------If it is wrong then it displays color as background--------------//
			messageDisplay.textContent = "Try Again";
		}
	});
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------THIS FUNCTION MAKES ALL THE COLOR TO SAME COLOR WHEN IT IS CORRECT----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
function changeColors(color){
//Loop through all squares
for (i= 0; i < squares.length; i++) {
//change all colors to match the given colors 
squares[i].style.background = color;
}
}
/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------THIS FUNCTION TO CHOOSE RANDOM COLORS FOR THE SQUARE (RGB)----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];	
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------THIS FUNCTION TO CHOOSE RANDOM NUMBERS OF ARRAY BUT ONLY [6] ARRAYS----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
function generateRandomColors(num){
	//make an array
	var arr = []
	//repeat num times
	for (var i = 0; i < num; i++) {
		//push the random color to array
		arr.push(randomColors())
	}
	//return the arry
	return arr;
}

/*---------------------------------------------------------------------------------------------------------------------------------------------------------
-------------------------------------------THIS FUNCTION TO CHOOSE RANDOM COlORS TO FILL IN GENERATE RANDOM COLORS----------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------*/
function randomColors(){
	//pick a red color form 0 - 256
	var r = Math.floor(Math.random() * 256);

	//pick a green color form 0 - 256
	var g = Math.floor(Math.random() * 256);

	//pick a blue color form 0 - 256
	var b = Math.floor(Math.random() * 256);

	//Return rgb in the concatinated form
	return "rgb(" + r + ", " + g + ", " + b + ")";
}