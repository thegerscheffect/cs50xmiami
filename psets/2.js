/*
The Lifetime Supply Calculator

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

- Store your current age into a variable.
- Store a maximum age into a variable.
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so:
"You will need NN to last you until the ripe old age of X".
*/

// write your solution here...
var supply;
function lifeTime(){
var currentAge = prompt("What is your age?");
var maxAge = prompt("Until what age will you live?");
var perDay = prompt("How many pieces of snacks do you eat per day?");
supply = (maxAge - currentAge) * (perDay * 365);
document.writeln("You will need " + supply + " units of your favorite snack to last you until the ripe old age of " + maxAge + ".");
}lifeTime(supply);