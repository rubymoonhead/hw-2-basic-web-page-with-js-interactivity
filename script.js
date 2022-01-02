function validateNum() {
	var firstNum = document.forms["myform"]["firstNum"].value;
	var secondNum = document.forms["myform"]["secondNum"].value;
	
	// create an array that holds written values for zero through fifty
	numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty"];

	// be sure to turn input into lowercase
	// if not found it will return a -1 so need to check between 0 - 50 or not -1
	let translatedNum = numberList.indexOf(firstNum);
	let translatedNum2 = numberList.indexOf(secondNum);

	if (translatedNum == -1) {
		alert("No all caps, misspellings, numerals allowed; please re-enter your first number");
		return false
	}
	
	if (translatedNum2 == -1) {
		alert("No all caps, misspellings, numerals allowed; please re-enter your second number");
		return false
	}
	
	// grab the operator chosen
	let arithOperator = document.getElementById("arithOperator").value;
	
	if (arithOperator === "add") {
		var answer = translatedNum + translatedNum2;
		var myString = firstNum + " + " + secondNum + " = " + answer;
	}
	else if (arithOperator === "divide") {
		var answer = translatedNum / translatedNum2;
		var myString = firstNum + " / " + secondNum + " = " + answer;
	}
	else if (arithOperator === "multiply") {
		var answer = translatedNum * translatedNum2;
		var myString = firstNum + " x " + secondNum + " = " + answer;
	}
	else if (arithOperator === "subtract") {
		var answer = translatedNum - translatedNum2;
		var myString = firstNum + " - " + secondNum + " = " + answer;
	}
	
	document.getElementById("math").innerHTML = myString;
}