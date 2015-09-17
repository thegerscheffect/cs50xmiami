/*
The Lifetime Supply Calculator part 2

Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:
- takes 2 arguments: age, amount per day.
- calculates the amount consumed for rest of the life (based on a constant max age).
- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
- Call that function three times, passing in different values each time.
- Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

// write your solution here...
function calculateSupply(age, amount){
    var maxAge = 120;
    amount = prompt("How many units of your favorite snack do you eat per day?");
    age = prompt("What is your age?");
    var total = (amount * 365) * (maxAge - age);
    document.write("You will need " + total + " to last you until the ripe old age of " + maxAge + ".");

}
calculateSupply();
calculateSupply();
calculateSupply();
