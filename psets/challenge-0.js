/*
 The Calculator
 - Write a function called squareNumber that will take one argument (a number),
 square that number, and return the result.
 It should also log a string like "The result of squaring the number 3 is 9."
 - Write a function called halfNumber that will take one argument (a number),
 divide it by 2, and return the result.
 It should also log a string like "Half of 5 is 2.5.".
 - Write a function called percentOf that will take two numbers,
 figure out what percent the first number represents of the second number,
 and return the result. It should also log a string like "2 is 50% of 4."
 - Write a function called areaOfCircle that will take one argument (the radius),
 calculate the area based on that, and return the result.
 It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
 - Bonus: Round the result so there are only two digits after the decimal.
 Write a function that will take one argument (a number) and perform the following operations,
 using the functions you wrote earlier:
 - Take half of the number and store the result.
 - Square the result of #1 and store that result.
 - Calculate the area of a circle with the result of #2 as the radius.
 - Calculate what percentage that area is of the squared result (#3).
 */

// write your solution here.../**

function squareNumber(number){
    console.log("The square of " + number + " is " + number * number + ".");
    return number * number;
}squareNumber(5);

function halfNumber(number){
    console.log("Half of " + number + " is " + number / 2);
    return number / 2;
}halfNumber(14);

function percentOf(num1, num2){
    var percent = num1 / num2 * 100;
    console.log(num1 + " is " + percent + "% of " + num2);
    return percent;
}percentOf(5, 50);

function areaOfCircle(radius){
    var area = Math.PI * (radius * radius);
    area = Math.floor(area * 100) / 100;
    console.log("The area for a circle with a radius of " + radius + " is " + area);
    return area;
}areaOfCircle(2);

function operations(number){
    var half = halfNumber(number);
    var square = squareNumber(half);
    var calculate = areaOfCircle(square);
    var area = percentOf(calculate,square);
}operations(10);