let infos = "";
let backdropsArr = [];
var menu_value = "";
var data = "";
var pageNumber = 1;
var pageSize = "";


const process_response = (x) => {

    data = x
    pageNumber = 1
    display();
    paginateMenu();

}


const initajax = () => {
    var name = $("#moviesname").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${name}`,
        type: "GET",
        success: process_response
    });
}

const display = () => {
    $("#results").empty();
    $("#rightdiv").empty();
    backdropsArr = [];
  
    pageSize = Number(pageSize);
    firstIndex = pageSize * (pageNumber - 1);
    lastIndex = pageSize * (pageNumber - 1) + (pageSize - 1)
    for (i = firstIndex; i <= lastIndex; i++) {
        infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></img>`;

        $("#results").append(`${infos}<br>`);
        $("#results").append(`<button id="bigImg${i}">Show big image</button><br><br>`);
        backdropsArr.push(`<img src="https://image.tmdb.org/t/p/original${data.results[i].backdrop_path}"width="50%">`)
    }
    for (let j = 0; j < backdropsArr.length; j++) {

        $(`#bigImg${j}`).click(() => {
            $("#rightdiv").html(backdropsArr[j]);
        });

    }

}


function changePageNum() {
    pageNumber = $(this).attr("id");
    pageNumber = Number(pageNumber);
    display()
}

function paginateMenu() {
    $("#button").empty();

    for (i = 1; i <= Math.ceil(data.results.length / pageSize); i++) {
        $("#button").append(`<button class ="display" id="${i}">${i}</button>`)
    }
    $("#first_page").html(`<button id="first">First</button>`)
    $("#last_page").html(`<button id="last">Last</button>`)

}

const setup = () => {
    $("#getResults").click(initajax);
    $("#moviesname").keypress(function (event) {
        if (event.keyCode === 13) {
            initajax();
        }
    });
    pageSize = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        pageSize = $("#page_size option:selected").val();
    });

    $("body").on("click", ".display", changePageNum);

}

$(document).ready(setup);








