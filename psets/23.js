/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var favMovie = {
  title: "The Movie",
  duration: 90,
  stars: [
    "Billy", "Bob", "Thornton", "Junior"
  ]
};
function movies(){
  document.writeln(favMovie.title + " lasts for " + favMovie.duration + " minutes. Stars: " + favMovie.stars);
}
movies();