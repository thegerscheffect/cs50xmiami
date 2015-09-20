/*
The Fortune Teller part 2

Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
- takes 4 arguments: number of kidsren, partner's name, geographic location, title title.
- outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
- Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(title, geo, partner, kids){
    if(!arguments[0]){
        title = ["CEO", "Manager", "Busboy"];
    }
    if(!arguments[1]){
        geo = ["Miami", "Frankfurt", "Tokyo"];
    }
    if(!arguments[2]){
        partner = ["Lisa", "Sandra", "Kate"];
    }
    if(!arguments[3]){
        kids = ["4", "1", "8"];
    }
    document.writeln("You will be a " + title[i] + " in " + geo[i] + ", and married to " + partner[i] + " with " + kids[i] + " kids." + "<br>");
}
tellFortune(i=0);
tellFortune(i=1);
tellFortune(i=2);