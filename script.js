'use strict'

const body = document.querySelector('body');
const srcList = document.querySelector('.src-list');
const input = document.querySelector('.input');
const cards = document.querySelector('.cards');


function getData() {
    fetch('http://api.tvmaze.com/shows')
        .then(res => res.json())
        .then(data => {
            const dta = [];
            data.map((e, i) => {
                if (i < 50) dta.push(e);
            })
            renderPage(dta)
        });

}


function renderPage(data) {
    data.forEach(e => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        const img = document.createElement('img');
        img.src = e.image.medium;
        const link = document.createElement('a');
        link.href = './info.html'
        link.textContent = e.name;

        cards.append(card);
        card.append(img);
        card.append(link);

        card.addEventListener('click', function () {
            localStorage.setItem('id', e.id);
            window.location = './info.html';
        })

    });
}


function searchMovies(e) {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res => res.json())
        .then(data => {
            const dta = data;
            console.log(dta);
            dta.forEach(e => {
                const id = e.show.id;
                const li = document.createElement('li');
                li.setAttribute('class', 'li')
                li.textContent = e.show.name;
                srcList.append(li)

                li.addEventListener('click', function () {
                    localStorage.setItem('id', e.show.id);
                    window.location = './info.html';
                })
            })
        })
}


getData()

input.addEventListener('keyup', function (e) {
    srcList.innerHTML = '';
    searchMovies(e);
})

body.addEventListener('click', function () {
    srcList.innerHTML = ''
})