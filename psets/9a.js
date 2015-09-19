
function pset9(words) {
    if (!arguments[0]) {
        document.writeln("What is your sentence?");
    }
    var sentence = document.getElementById("userInput").value;
    var bad = sentence.indexOf("bad");
    var not = sentence.indexOf("not");
    if (bad > not) {
        sentence = sentence.slice(0, not).concat("good!");
    }
    document.getElementById("result").innerHTML = sentence;
}
pset9();
