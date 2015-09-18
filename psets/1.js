/*
The Age Calculator

Forgot how old someone is? Calculate it!

- Store the current year in a variable.
- Store their birth year in a variable.
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

function ageCalc(currentYear, birthYear){
    if(!arguments[0]){
        currentYear = prompt("What year is it now?");
    }
    if(!arguments[1]){
        birthYear = prompt("What year were you born?");
    }
    var age = currentYear - birthYear;
    document.writeln("You are either " + (age - 1) + " or " + age + " years old.");
}
ageCalc();