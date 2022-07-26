infos = "";
data = "";
pageNumber = 1;
pageSize = "";

function process_response(x) {
    data = x
    pageNumber = 1
    display();
    paginateMenu();

}

function initajax() {
    let name = $("#moviesname").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${name}`,
        type: "GET",
        success: process_response
    });
}

function backDropImg() {

    bigImg = $(this).attr("id");
    $("#rightdiv").html(`<img src="https://image.tmdb.org/t/p/original${bigImg}"width="50%">`)

}


function display() {
    $("#results").empty();

    pageSize = Number(pageSize);
    firstIndex = pageSize * (pageNumber - 1);
    lastIndex = pageSize * (pageNumber - 1) + (pageSize - 1)
    for (i = firstIndex; i <= lastIndex && i < 20; i++) {
        infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"height="300px">`;
        $("#results").append(`${infos}<br>`);
        z = `<button id="${data.results[i].backdrop_path}" class="backdropButton">Show big image</button><br><hr>`;
        $("#results").append(z)
    }

}

function changePageNum() {
    pageNumber = $(this).attr("id");
    pageNumber = Number(pageNumber);
    console.log(pageNumber)

    if (pageNumber > 1) {
        $("#prev").html(`<button class="previous" id="${pageNumber}">Prev.</button>`)
        $("#next").html(`<button class="next" id="${pageNumber}">Next</button>`)
    }
    display()
    console.log(pageNumber)
}


function previousPage() {
    if (pageNumber > 1) {
        pageNumber -= 1;
        display()
    } else {
        pageNumber === 1;
        display()
    }
    console.log(pageNumber)



}

function nextPage() {
    if (pageNumber >= 1 && pageNumber < Math.ceil(data.results.length / pageSize)) {
        pageNumber += 1;
        display();

    } else {
        pageNumber === Math.ceil(data.results.length / pageSize)
        display();
    }
    console.log(pageNumber)


}





function paginateMenu() {
    $("#button").empty();
    for (i = 1; i <= Math.ceil(data.results.length / pageSize); i++) {
        $("#first_page").html(`<button class="first" id=${1}>First</button>`)
        $("#button").append(`<button class ="display" id="${i}">${i}</button>`)
        $("#last_page").html(`<button class="last" id=${Math.ceil(data.results.length / pageSize)}>Last</button>`)

    }

}


function setup() {
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
    $("body").on("click", ".previous", previousPage)
    $("body").on("click", ".next", nextPage)
    $("body").on("click", "#page_size", "option", display)
    $("body").on("click", "#page_size", "option", paginateMenu)



}

$(document).ready(setup);

// if (pageNumber > 1 && pageNumber <= Math.ceil(data.results.length / pageSize)) {
//     $("#next").html(`<button class="next" id="${pageNumber + 1}">Next</button>`)
//     $("#prev").html(`<button class="previous" id="${pageNumber - 1}">Prev.</button>`)

// }







