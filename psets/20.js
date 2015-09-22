/*
Your top choices

Create an array to hold your top choices (colors, presidents, whatever).
- For each choice, log to the screen a string like: "My #1 choice is blue."

- Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice",
  picking the right suffix for the number based on what it is.
*/

topChoices = ["Blue", "Circle", "Porsche", "Oreos", "iPhone", "Blankets", "Winning"];
contract = ["st", "nd", "rd", "th", "th", "th", "th"];
var arrLen = topChoices.length;
for(var i = 1, j = 0; i < arrLen; i++, j++) {
  document.writeln("My " + i + contract[j] + " choice is: " + topChoices.shift() + "<br>");
}