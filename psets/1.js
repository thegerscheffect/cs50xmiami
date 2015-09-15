/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

// write your solution here...
var currentYear;
function ageCalc(currentYear){
     currentYear = prompt("What year is it now?");
    var birthYear = prompt("What year were you born?");
    var age = currentYear - birthYear;
    console.log("You are either " + (age - 1) + " or " + age);
}ageCalc(currentYear);