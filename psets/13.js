/*
The Geometrizer

Create 2 functions that calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

Create a function called calcCircumfrence:
- Pass the radius to the function.
- Calculate the circumference based on the radius, and output "The circumference is NN".

Create a function called calcArea:
- Pass the radius to the function.
- Calculate the area based on the radius, and output "The area is NN".
*/

function calcCircumference(radius) {
  if(!arguments[0]){
    radius = prompt("To calculate the circumference, what is the radius?");
  }
  var circumference = 2 * Math.PI * radius;
  document.writeln("The circumference is: " + circumference + ".<br>");
}
calcCircumference(1);

function calcArea(radius) {
  if (!arguments[0]) {
    radius = prompt("To calculate the area,what is the radius?");
  }
  var area = Math.PI * (radius * radius);
  document.writeln("The area is: " + area + ".");
}
calcArea(2);