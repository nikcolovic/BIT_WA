function Program (date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.numberOfMovies = function () {
        return this.listOfMovies.length;
    };
    this.addMovie = function (movieObject) {
		return this.listOfMovies.push(movieObject);
    };
    this.getData = function () {
        var allMoviesLength = 0;
        var allMoviesData = '';
        this.listOfMovies.forEach(function (movieElement) {
            allMoviesLength += parseInt(movieElement.length);
            allMoviesData += movieElement.getData() + '\n\t\t';
        });
        return this.date.toDateString() + ', ' + this.listOfMovies.length + ' movies, program duration ' + allMoviesLength + ' min.' /*\n\t\t' + allMoviesData*/ ;
        };
    
    this.getDate = function () {
        return this.date.toDateString()
        };

    };
