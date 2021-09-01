var createMovieBtnElement = document.getElementById('create-movie-btn');
var createProgramBtnElement = document.getElementById('create-program-btn');
var addMovieBtnElement = document.getElementById('addmovie-btn');
var createdMovieElementUl = document.getElementById('created-movie-here')
var uListOfCreatedPrograms = document.getElementById('programs-list');
var selectProgramList = document.getElementById('program-dropdown-list');
var selectMovieList = document.getElementById('movie-dropdown-list');
var removeMovieFromProgramBtnElement = document.getElementById('remove-movie-btn');
var listOfCreatedMovies = [];
var listOfCreatedPrograms = [];

// function for creating a new movie
function createMovie () {
    var movieTitle = document.getElementById('movie-title').value;
    var movieLength = document.getElementById('movie-length').value;
    var movieGenre = document.getElementById('genre').value;

    var movieObject = new Movie(movieTitle, movieGenre, movieLength);
    //console.log(movieObject);

    listOfCreatedMovies.push(movieObject);
    // creating new li (movie) and adding it to the ul below the button
    var createdMovieLi = document.createElement('li');
    createdMovieLi.textContent = movieObject.getData();
    createdMovieElementUl.appendChild(createdMovieLi);
    // adding new movie to movie dropdown
    var movieOption = document.createElement('option');
    movieOption.textContent = movieObject.getData();
    movieOption.setAttribute('value', movieObject.getData());
    selectMovieList.appendChild(movieOption);
    // reseting inputs
    document.getElementById('movie-title').value = '';
    document.getElementById('movie-length').value = '';
    document.getElementById('genre').value = '-'
}

// function for creating a new program
function createProgram () {
    var programDate = document.getElementById('program-date').value;
    var programObject = new Program(programDate);
    listOfCreatedPrograms.push(programObject);
    //adding to list of programs in html
    var liProgram = document.createElement('li');
    liProgram.textContent = programObject.getData();
    uListOfCreatedPrograms.appendChild(liProgram);
    //adding program select option in html 
    var programOption = document.createElement('option');
    programOption.textContent = programObject.getData();
    programOption.setAttribute('value', programObject.getDate());
    selectProgramList.appendChild(programOption);
};

// function for adding a movie to program
function addMovieToProgram () {    
    var movieToAdd = document.getElementById('movie-dropdown-list').value;
    var toWhichProgram = document.getElementById('program-dropdown-list').value;
    //console.log('which' + movieToAdd);
    //console.log(' to' + toWhichProgram);
    listOfCreatedMovies.forEach(function (movieObjectElement) {
        //console.log(movieObjectElement.getData())
        if (movieObjectElement.getData() === movieToAdd) {
            var movieAdd = movieObjectElement;
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
                    var currentLi = searchForLi[i].textContent.slice(0,15)
                    //console.log('trenutni Li ' + currentLi)
                        if (searchItem === currentLi) {						
                        searchForLi[i].innerHTML = programObjectElement.getData()
                        }
                    }	
			    }
            })
        }
    })    
// console.log(listOfCreatedPrograms);    
};

// function for removing a movie from program    WORK IN PROGRESS

function removeMovieFromProgram () {    
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
    console.log(listOfCreatedPrograms);    
}


// event listeners

createMovieBtnElement.addEventListener('click', createMovie);
createProgramBtnElement.addEventListener('click', createProgram);
addMovieBtnElement.addEventListener('click',addMovieToProgram);

removeMovieFromProgramBtnElement.addEventListener('click', removeMovieFromProgram);



