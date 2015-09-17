/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

// write your solution here...
var circ, area;
function geometrizer(area, circ){
var radius = prompt("What is the radius of the circle?");
var diameter = radius * radius;
circ = 2 * Math.PI * radius;
circ = Math.floor(circ * 100) / 100;
document.write("The circumference is " + circ + ".");
area = Math.PI * diameter;
area = Math.floor(area * 100) / 100;
document.write("\nThe area is " + area);
}geometrizer(area, circ);