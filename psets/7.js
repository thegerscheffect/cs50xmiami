/*
FixStart

Create a function called fixStart.
It should take a single argument, a string, and return a version where all
occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long.

For example:

fixStart('babble'): 'ba**le'
*/
var replaced;
function fixStart(string) {
string = prompt("What is the word?");
var char1 = string.slice(0,1);
var string1 = string.slice(1);
var swap = string1.split(string.charAt(0)).join("*");
var replaced = document.writeln(char1.concat(swap));
console.log(replaced);
}fixStart(replaced);
