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

function mixUp(string1, string2) {
    if(!arguments[0]) {
        string1 = prompt("What is the first word?");
    }
    if(!arguments[1]) {
        string2 = prompt("What is the second word?");
    }
    var split1 = string1.slice(0,2);
    var split2 = string2.slice(0,2);
    document.writeln(split2.concat(string1.slice(2)));
    document.writeln(split1.concat(string2.slice(2)));
}
mixUp("dog");
