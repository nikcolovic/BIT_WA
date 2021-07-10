function Movie (title, genre, length) {    
    this.title = title;
    this.genreShort = genre.charAt(0).toUpperCase() + genre.charAt(genre.length-1).toUpperCase();
    this.length = length;
    this.getData = function () {
        return this.title + ', ' + this.length + ' min, ' + this.genreShort;
    }
}