let createMovieBtnElement = document.getElementById('create-movie-btn');
let createProgramBtnElement = document.getElementById('create-program-btn');
let addMovieBtnElement = document.getElementById('addmovie-btn');
let createdMovieElementUl = document.getElementById('created-movie-here')
let uListOfCreatedPrograms = document.getElementById('programs-list');
let selectProgramList = document.getElementById('program-dropdown-list');
let selectMovieList = document.getElementById('movie-dropdown-list');
let removeMovieFromProgramBtnElement = document.getElementById('remove-movie-btn');
let listOfCreatedMovies = [];
let listOfCreatedPrograms = [];

// function for creating a new movie
function createMovie() {
    let movieTitle = document.getElementById('movie-title').value;
    let movieLength = document.getElementById('movie-length').value;
    let movieGenre = document.getElementById('genre').value;

    let movieObject = new Movie(movieTitle, movieGenre, movieLength);
    //console.log(movieObject);

    listOfCreatedMovies.push(movieObject);
    // creating new li (movie) and adding it to the ul below the button
    let createdMovieLi = document.createElement('li');
    createdMovieLi.textContent = movieObject.getData();
    createdMovieElementUl.appendChild(createdMovieLi);
    // adding new movie to movie dropdown
    let movieOption = document.createElement('option');
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute('value', movieObject.getData());
    selectMovieList.appendChild(movieOption);
    // reseting inputs
    document.getElementById('movie-title').value = '';
    document.getElementById('movie-length').value = '';
    document.getElementById('genre').value = '-'
}

// function for creating a new program
function createProgram() {
    let programDate = document.getElementById('program-date').value;
    let programObject = new Program(programDate);
    listOfCreatedPrograms.push(programObject);
    //adding to list of programs in html
    let liProgram = document.createElement('li');
    liProgram.textContent = programObject.getData();
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program select option in html 
    let programOption = document.createElement('option');
    programOption.textContent = programObject.getData();
    programOption.setAttribute('value', programObject.getDate());
    selectProgramList.appendChild(programOption);

};

// function for adding a movie to program
function addMovieToProgram () {    
        let movieToAdd = document.getElementById('movie-dropdown-list').value;
        let toWhichProgram = document.getElementById('program-dropdown-list').value;
        //console.log('which' + movieToAdd);
        //console.log(' to' + toWhichProgram);
        listOfCreatedMovies.forEach(function (movieObjectElement) {
            //console.log(movieObjectElement.getData())
            if (movieObjectElement.getData() === movieToAdd) {
                let movieAdd = movieObjectElement;
                //console.log(movie);
                listOfCreatedPrograms.forEach(function (programObjectElement) {
                    //console.log(programObjectElement.getDate())
                    if (programObjectElement.getDate() === toWhichProgram) {
                    programObjectElement.addMovie(movieAdd);
                    
                    // update program list info
                    searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
                    //console.log(searchForLi)
                    searchItem = toWhichProgram;
                    //console.log(searchItem)
                        for (i = 0; i < searchForLi.length; i++) {
                        let currentLi = searchForLi[i].textContent.slice(0,15)
                        //console.log('trenutni Li ' + currentLi)
                            if (searchItem === currentLi) {						
                            searchForLi[i].innerHTML = programObjectElement.getData()
                            }
                        }	
                    }
                })
            }
        })
    };   
// console.log(listOfCreatedPrograms);    


// function for removing a movie from program    WORK IN PROGRESS
/*
class removeMovieFromProgram {
    constructor () {    
        var movieToRemove = document.getElementById('movie-dropdown-list').value;
        var fromWhichProgram = document.getElementById('program-dropdown-list').value;
        //console.log('which' + movieToAdd);
        //console.log(' to' + toWhichProgram);
        listOfCreatedMovies.forEach(function (movieObjectElement) {
            //console.log(movieObjectElement.getData())
            if (movieObjectElement.getData() === movieToRemove) {
                var deleteIndex = indexOf(movieObjectElement);
                //console.log(movie);
                listOfCreatedPrograms.forEach(function (programObjectElement) {
                    //console.log(programObjectElement.getDate())
                    if (programObjectElement.getDate() === fromWhichProgram) {
                    programObjectElement.removeMovie(movieRemove);
                    
                        // update program list info
                        searchForLi = uListOfCreatedPrograms.getElementsByTagName('li');
                        console.log(searchForLi)
                        searchItem = fromWhichProgram;
                        console.log(searchItem)
                        for (i = 0; i < searchForLi.length; i++) {
                        var currentLi = searchForLi[i].textContent.slice(0,15)
                        console.log('trenutni Li ' + currentLi)
                            if (searchItem === currentLi) {						
                            searchForLi[i].innerHTML = programObjectElement.getData()
                            }
                        }
                    }
                })
            }
        })
    }    
    console.log(listOfCreatedPrograms);    
}
*/

// event listeners

createMovieBtnElement.addEventListener('click', createMovie);
createProgramBtnElement.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click',addMovieToProgram);

//removeMovieFromProgramBtnElement.addEventListener('click', removeMovieFromProgram);



