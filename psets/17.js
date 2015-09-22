/*
The Pluralizer

Write a function named pluralize that:
- takes 2 arguments, a noun and a number.
- returns the number and pluralized form, like "5 cats" or "1 dog".

Call that function for a few different scores and log the result to make sure it works.
- Bonus: Make it handle a few collective nouns like "sheep" and "geese".
*/
function pluralize(number, noun) {
  if (!arguments[1]) {
    noun = prompt("What is the noun?")
  }
  if (!arguments[0]) {
    number = prompt("How many?")
  }
  var nLen = noun.length;
  var endNoun = noun.slice(nLen - 2);
  if (number > 1) {
    if (noun == "piano" || noun == "igloo" || noun == "bamboo" || noun == "tattoo" || noun == "radio" || noun == "zoo" || noun == "photo") {
      noun = (noun.concat("s"));
    }
    else if (noun == "advice" || noun == "deer" || noun == "pants" || noun == "scissors" || noun == "sheep" || noun == "species" || noun == "geese") {
      noun = (noun.concat(""));
    }
    else if (endNoun == "ch" || "sh") {
      noun = (noun.concat("es"));
    }
    else if (noun.charAt(nLen - 1) == "o" || "s" || "x") {
      noun = (noun.concat("es"));
    }
    else if (noun.charAt(nLen - 1) == "y") {
      noun = (noun.slice(0, (nLen - 1)).concat("ies"));
    } else {
      noun = (noun.concat("s"));
    }
  }
  document.writeln(number + " " + noun);
  return number + " " + noun;
}
pluralize();