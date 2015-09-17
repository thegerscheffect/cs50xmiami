/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of children, partner's name, geographic location, job title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(child, partner, geo, job){
job = ["CEO", "Manager", "Busboy"];
geo = ["Miami", "Frankfurt", "Tokyo"];
partner = ["Lisa", "Sandra", "Kate"];
child = ["4", "1", "8"];
var output = document.writeln("You will be a " + job[i] + " in " + geo[i] + ", and married to " + partner[i] + " with " + child[i] + " kids.");
}
tellFortune(i=0);
tellFortune(i=1);
tellFortune(i=2);