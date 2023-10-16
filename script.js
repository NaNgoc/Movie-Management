let allMovies = [];

const displayMessage = (message) => {
    document.getElementById('result').innerHTML += message + "<br>";
}

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    displayMessage("A new movie is added<br>");
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    displayMessage("Printing all movies....<br>");
    allMovies.forEach(movie => {
        displayMessage(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}<br>`);
    });
    displayMessage(`<br>You have ${allMovies.length} movies in total<br>`);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    displayMessage(`printing movie that has a rating higher than ${rating}<br>`);
    let count = 0;
    allMovies.forEach(movie => {
        if (movie.rating > rating) {
            displayMessage(`${movie.title} has a rating of ${movie.rating}<br>`);
            count++;
        }
    });
    displayMessage(`<br>In total, there are ${count} matches<br>`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    let movie = allMovies.find(m => m.title === title);
    if (movie) {
        movie.haveWatched = !movie.haveWatched;
        displayMessage("changing the status of the movie...<br>");
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayMessage("----------------<br>");
displayMessage("running program......<br>");
displayMessage("----------------<br>");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayMessage("----------------<br>");
addMovie(movie1);
displayMessage("----------------<br>");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------<br>");

printMovies();

/*replace console.log with display on web page*/
displayMessage("----------------<br>");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------<br>");

printMovies();
/*replace console.log with display on web page*/
displayMessage("----------------<br>");

highRatings(3.5);