let infos = "";
// let backdropsArr = [];
var menu_value = "";
var data = "";
var pageNumber = 1;
var pageSize = "";

const initajax = () => {
    var name = $("#moviesname").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${name}`,
        type: "GET",
        success: process_response
    });
}

const process_response = (x) => {

    data = x
    pageNumber = 1
    display();
    paginateMenu();

}



const display = () => {
    $("#results").empty();
    $("#rightdiv").empty();

    pageSize = Number(pageSize);
    firstIndex = pageSize * (pageNumber - 1);
    lastIndex = pageSize * (pageNumber - 1) + (pageSize - 1)
    for (i = firstIndex; i <= lastIndex; i++) {
        infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"height="300px">`;

        $("#results").append(`${infos}<br>`);
        z = `<button id="${data.results[i].backdrop_path}" class="backdropButton">Show big image</button><br><hr>`;
        $("#results").append(z)
        // backdropsArr.push(`<img src="https://image.tmdb.org/t/p/original${data.results[i].backdrop_path}"width="50%">`)
    }


}

function paginateMenu() {
    $("#button").empty();

    for (i = 1; i <= Math.ceil(data.results.length / pageSize); i++) {
        $("#first_page").html(`<button class="first" id=${1}>First</button>`)
        $("#button").append(`<button class ="display" id="${i}">${i}</button>`)
        $("#last_page").html(`<button class="last" id=${Math.ceil(data.results.length / pageSize)}>Last</button>`)
    }


}

function backDropImg() {
    // for (let j = 0; j < backdropsArr.length; j++) {

    //     $(`#bigImg${j}`).click(() => {
    //         $("#rightdiv").html(backdropsArr[j]);
    //     });

    // }
    w = $(this).attr("id");
    $("#rightdiv").html(`<img src="https://image.tmdb.org/t/p/original${w}"width="50%">`)

}


function changePageNum() {
    pageNumber = $(this).attr("id");
    pageNumber = Number(pageNumber);
    display()
}




const setup = () => {
    $("#getResults").click(initajax);
    $("#moviesname").keypress(function (event) {
        if (event.keyCode === 13) {
            initajax();
        }
    });

    $("body").on("click", ".backdropButton", backDropImg);

    pageSize = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        pageSize = $("#page_size option:selected").val();
    });

    $("body").on("click", ".display", changePageNum);
    $("body").on("click", ".first", changePageNum)
    $("body").on("click", ".last", changePageNum)


}

$(document).ready(setup);








