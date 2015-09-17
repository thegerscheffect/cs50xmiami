var value = 0;
document.writeln("What is your sentence?");
function pset9(words) {
    var sentence = document.getElementById("userInput").value;
    var length = sentence.length;
    var bad = sentence.indexOf("bad");
    var not = sentence.indexOf("not");
    if(bad > not){
        sentence = sentence.slice(0,not).concat("good!");
    }
    document.getElementById("result").innerHTML = sentence;
}pset9(value);
