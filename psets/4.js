/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function converter(celsius, fahrenheit){
    if(!arguments[0]){
        celsius = prompt("What is the degree celsius?");
    }
    if(!arguments[1]){
        fahrenheit = prompt("What is the degree fahrenheit?");
    }
    var CtoF = (((celsius * 9) / 5) + 32);
    var FtoC = (((fahrenheit - 32) * 5) / 9);
    document.writeln(celsius + " degree celsius is " + CtoF + " degree fahrenheit." + "<br>");
    document.writeln(fahrenheit + " degree fahrenheit is " + FtoC + " degree celsius.")
}
converter();