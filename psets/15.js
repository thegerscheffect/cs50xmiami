/*
 What number's bigger?

 Write a function named greaterNum that:
 - takes 2 arguments, both numbers.
 - returns whichever number is the greater (higher) number.

 Call that function 2 times with different number pairs,
 and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
 */

function greaterNum(x, y) {
  if (!arguments[0]) {
    x = prompt("What is the value of the first number?");
  }
  if (!arguments[1]) {
    y = prompt("What is the value of the second number?");
  }
  if(x > y){
    var higher = x;
  } else {
    higher = y;
  }
  document.writeln("The greater number of " + x + " and " + y + " is " + higher + ".<br>");
  return higher;
}
greaterNum(5, 7);
greaterNum(9, 3);
