/*
 The World Translator

 Write a function named helloWorld that:
 - takes 1 argument, a language code (e.g. "es", "de", "en")
 - returns "Hello, World" for the given language, for at least 3 languages.
 It should default to returning English.

 Call that function for each of the supported languages
 and log the result to make sure it works.
 */

function helloWorld(languageCode) {
  if (!arguments[0]) {
    languageCode = "en";
    var state = document.writeln(languageCode + ": Hello, World" + "<br>");
  }
  if (languageCode === "de") {
    state = document.writeln(languageCode + ": Hallo, Welt!" + "<br>");
  }
  if (languageCode === "zh") {
    state = document.writeln(languageCode + ": Nǐ hǎo, Shìjiè!" + "<br>");
  }
  if (languageCode === "pt") {
    state = document.writeln(languageCode + ": Ola, Mundo" + "<br>");
  }
  return state;
}
helloWorld();
helloWorld("pt");
helloWorld("zh");