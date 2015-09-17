/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
var celsius, fahrenheit;
function converter(celsius, fahrenheit){
celsius = prompt("What is the degree celsius?");
var CtoF = (((celsius * 9) / 5) + 32);
fahrenheit = prompt("What is the degree fahrenheit?");
var FtoC =(((fahrenheit - 32) * 5) / 9);
document.writeln(celsius + " degree celsius is " + CtoF + " degree fahrenheit.");
document.writeln(fahrenheit + " degree fahrenheit is " + FtoC + " degree celsius.")
}converter(celsius, fahrenheit);