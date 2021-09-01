const cardDiv = $('.cards-div')
//const pagingUl = $('.pagination')
var num;

$(document).ready(() => {
   fillPageWithCards(1)
   paging(num,1);
})

function fillPageWithCards(pageNum) {    
    $.ajax({
        url: "https://rickandmortyapi.com/api/character/?page=" + pageNum,
        method: "GET",
    }).done(function (response) {
        cardDiv.html("");
        if (response.length == 0) {
            errorElement.text("No results");
            return;
        }
        else {      
        response.results.forEach(function (item) {
            var card = $(`<div class='col-4 mt-5' >
                            <div class= 'card card-show'>
                                <img src='${item.image}'>
                                <div class='card-body'>
                                    <h5 class='card-title' onclick="showCharacterInfo('${item.id}')" > ${item.name}</h5>
                                    <button class="likeBtn">Like</button>
                                </div>
                            </div>
                        </div>`);
            cardDiv.append(card);            
        });  
        num = response.info.pages;   
    }
    }).fail (function () {
        errorElement.text("Network error")
        errorElement.toggle();
    });
}

//==== pagination section ========

const pagingUl = document.querySelector(".pagination ul");
let pagingLi;

const paging = (totalNumOfPages, currentPage) => {
    fillPageWithCards(currentPage);
    pagingLi = "";
    let beforeCurrentPage = currentPage - 1;
    let afterCurrentPage = currentPage + 1;
    if (beforeCurrentPage <= 0) {
        beforeCurrentPage = 1;
    }
    else if (afterCurrentPage >= totalNumOfPages) {
        afterCurrentPage <= totalNumOfPages;
    }

    //if (currentPage > 1) {
        pagingLi += `<li class="prev" onclick="paging(${totalNumOfPages}, ${currentPage - 1})">Prev</li>`
    //}

    for (let pageNumber = beforeCurrentPage; pageNumber <= afterCurrentPage; pageNumber++) {
        if (currentPage === pageNumber) {
            activeLi = "active"
        }
        else {
            activeLi = "";
        }
        pagingLi += `<li class="number ${activeLi}" onclick="paging(${totalNumOfPages}, ${pageNumber})">${pageNumber}</li>`
    }

    //if (currentPage < totalNumOfPages) {
        pagingLi += `<li class="next" onclick="paging(${totalNumOfPages}, ${currentPage + 1})">Next</li>`;
   // }
    pagingUl.innerHTML = pagingLi;
}

// character details

const url1 = "https://rickandmortyapi.com/api/character/"

const showCharacterInfo = (id) => {
    $.ajax({
        url:`${url1}${id}`,
        method:"GET",
    }).done((response) => {
        cardDiv.html("");
        let info = `<div class="col-6">
        <img src="${response.image}">
      </div>
      <div class="col-6">
        <h2>ID: ${response.id}</h2>
        <h2>Name: ${response.name}</h2>
        <h2>Status:${response.status} </h2>
        <h2>Species:${response.species} </h2>
        <h2>Type: ${response.type}</h2>
        <h2>Gender:${response.gender} </h2>
        <h2>Origin:${response.origin.name} </h2>
        <h2>Location: ${response.location.name}</h2>
        <h2>Episode: </h2>
        <h2>URL:${response.url} </h2>
        <h2>Created: ${response.created}</h2>
      </div>`;
        cardDiv.append(info);
    }).fail(() => {
        alert('Network error');
    });
};
