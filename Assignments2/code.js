let infos = '';
let backdropsArr = [];

const process_response = (data) => {

    $("#results").empty();
    $("#rightdiv").empty();
    backdropsArr = [];

    for (let movies in data.results) {
        infos = `<p>${data.results[movies].original_title}</p>\n<p>${data.results[movies].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"></img>`;
        $("#results").append(`${infos}<br>`);
        $("#results").append(`<button id="bigImg${movies}">Show big image</button><br><br>`);
        backdropsArr.push(`<img src="https://image.tmdb.org/t/p/original${data.results[movies].backdrop_path}"width="50%">`)
    }

    for (let i = 0; i < backdropsArr.length; i++) {

        $(`#bigImg${i}`).click(() => {
            $("#rightdiv").empty().append(backdropsArr[i]);
        });

    }
}




const initajax = () => {
    let name = $("#moviesname").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${name}`,
        type: "GET",
        success: process_response
    })
}

const setup = () => {
    $("#getResults").click(initajax);
    $("#moviesname").keypress(function (event) {
        if (event.keyCode === 13) {
            initajax();
        }

    });
}

$(document).ready(setup);






