'use strict'

const idRef = localStorage.getItem('id');

const body = document.querySelector('body');
const home = document.querySelector('header h4');
const srcList = document.querySelector('.src-list');
const input = document.querySelector('.input');
const title = document.querySelector('.title');
const img = document.querySelector('.img');
const details = document.querySelector('.details');
const seasons = document.querySelector('.seasons');
const sesSpan = document.querySelector('.seasHdr span');
const cast = document.querySelector('.cast');

function generateAbout(id) {
    fetch(`http://api.tvmaze.com/shows/${id}`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            title.textContent = dta.name
            details.innerHTML = dta.summary
            img.src = dta.image.original
        });

    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            sesSpan.textContent = `${dta.length}`;
            dta.forEach(e => {
                const li = document.createElement('li');
                li.textContent = `${e.premiereDate} - ${e.endDate}`;
                seasons.append(li)
            });
        })

    fetch(`http://api.tvmaze.com/shows/${id}/cast`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            console.log(data);
            dta.forEach(e => {
                const li = document.createElement('li');
                li.textContent = `${e.character.name}`;
                cast.append(li)
            })
        })
}

function searchMovies(e) {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            dta.forEach(e => {
                const id = e.show.id;
                const li = document.createElement('li');
                li.setAttribute('class', 'li')
                li.textContent = e.show.name;
                srcList.append(li)

                li.addEventListener('click', function () {
                    seasons.innerHTML = '';
                    cast.innerHTML = '';
                    generateAbout(id);
                    input.value = ''
                })
            })
        })
}


generateAbout(idRef);

input.addEventListener('keyup', function (e) {
    srcList.innerHTML = '';
    searchMovies(e);
})

body.addEventListener('click', function () {
    srcList.innerHTML = ''
})

home.addEventListener('click', function () {
    window.location = './index.html';
})





// http://api.tvmaze.com/shows/${id}    show
// http://api.tvmaze.com/shows/${id}/seasons  seasons
// http://api.tvmaze.com/shows/${id}/cast   cast 
// http://api.tvmaze.com/search/shows?q=
