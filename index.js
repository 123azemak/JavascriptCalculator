// Use getElementById to get the two numbers and store them in variables

// Create a function called multiplyNumbers
function multiplyNumbers() {
  var firstNum = document.getElementById("inputNum1").value;
  var secondNum = document.getElementById("inputNum2").value;
  var result = firstNum * secondNum;
  document.getElementById("multiplyAnswer").innerHTML = result;
}
// In the function use getElementById to change the ? to the answer of the equation

// If you get that working, create new forms for the other arithmetic operators
