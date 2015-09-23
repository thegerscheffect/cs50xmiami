/*
The Reading List

Keep track of which books you read and which books you want to read!

- Create an array of objects, where each object describes a book and has
  properties for the title (a string), author (a string),
  and alreadyRead (a boolean indicating if you read it yet).

- Iterate through the array of books. For each book, log the book title
  and book author like so: "The Hobbit by J.R.R. Tolkien".

- Now use an if/else statement to change the output depending on whether you
  read it yet or not. If you read it, log a string like
  'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string
  like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
*/

var bookArray = [
  book1 = {
  title: "The Mystery",
  author: "Barry White",
  alreadyRead: true
}];
bookArray.push(
  book2 = {
  title: "Clueless",
  author: "Arnold Schwartz",
  alreadyRead: false
});
bookArray.push(
  book3 = {
  title: "Javascript for Dummies",
  author: "Kerry Bradeshaw",
  alreadyRead: true
});
bookArray.push(
  book4 = {
  title: "Cycling in the world",
  author: "Frederich Holmes",
  alreadyRead: false
});
bookArray.push(
  book5 = {
  title: "Why Not Windows",
  author: "Lisa Leslie",
  alreadyRead: true
});
var bookLen = bookArray.length;
for(var i = 0; i < bookLen; i++) {
  var obj = bookArray[i].alreadyRead;
  if (obj == true) {
    console.log("You already read " + bookArray[i].title + " by " + bookArray[i].author);
  } else {
    console.log("You still need to read " + bookArray[i].title + " by " + bookArray[i].author);
  }
}

console.log(bookArray);