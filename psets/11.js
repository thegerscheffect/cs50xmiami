/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

function calculateAge(birthY, currentY){
    if(!arguments[0]){
        birthY = prompt("What year were your born?");
    }
    if(!arguments[1]){
        var date = new Date();
        currentY = date.getFullYear();
    }
    document.writeln("If the current year is: " + currentY + " and ");
    document.writeln("your birth year is: " + birthY + " then:" + "<br>");
    var age = currentY - birthY;
    document.writeln("You are either " + (age - 1) + " or " + age + "<br>");
}
calculateAge("1990");
calculateAge("2000");
calculateAge("2010");