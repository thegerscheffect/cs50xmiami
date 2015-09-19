/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/
function geometrizer(radius){
    if(!arguments[0]){
        radius = prompt("What is the radius of the circle?");
    }
    var diameter = radius * radius;
    var circumference = 2 * Math.PI * radius;
    circumference = Math.floor(circumference * 100) / 100;
    document.write("The circumference of the circle is " + circumference + ".");
    var area = Math.PI * diameter;
    area = Math.floor(area * 100) / 100;
    document.write("\nThe area of the circle is " + area);
}
geometrizer();