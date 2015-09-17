/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/
var string1, string2;
function mixUp(string1, string2) {
  // write your solution here...
string1 = prompt("What is the first word?");
string2 = prompt("What is the second word?");
/*
var string12 = string1.concat(" ",string2);
document.writeln(string12);*/
var split1 = string1.slice(0,2);
var split2 = string2.slice(0,2);
/*
document.writeln(split1);
document.writeln(split2);*/
var concat1 = document.writeln(split2.concat(string1.slice(2)));
var concat2 = document.writeln(split1.concat(string2.slice(2)));
}mixUp(string1, string2);
