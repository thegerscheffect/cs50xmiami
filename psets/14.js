/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(celTemp) {
  if (!arguments[0]) {
    celTemp = prompt("What is the temperature in Celsius?");
  }
  var fahrenheit = ((((celTemp * 9) / 5) + 32));
  document.writeln(celTemp + "°C is " + fahrenheit + "°F." + "<br>");
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(fahTemp) {
  if(!arguments[0]){
      fahTemp = prompt("What is the temperature in Fahrenheit?")
  }
  var celsius = (((fahTemp - 32) * 5) / 9);
  celsius = Math.floor(celsius * 10) / 10;
  document.writeln(fahTemp + "°F is " + celsius + "°C");
}
fahrenheitToCelsius(65);