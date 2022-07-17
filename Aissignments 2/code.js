

function process_response(data) {

    let infos = '';
    let backdropsArr = [];


    for (let movies in data.results) {
        infos = `<p>${data.results[movies].original_title}</p>\n<p>${data.results[movies].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"></img>`;
        $("#results").append(`${infos}<br>`);
        $("#results").append(`<button id="alt${movies}"> Show alternative image </button><br><br>`);
        backdropsArr.push(`<img src="https://image.tmdb.org/t/p/original/${data.results[movies].backdrop_path} width=100%">`)
    }

    for (i = 0; i < backdropsArr.length; i++) {
        let altImges = `#alt${i}`;
        $(altImges).click(() => {
            $("#right_div").empty().append(backdropsArr[i])
        });
    }

}


function init_ajax() {
    let movie_name = $("#movie_name_input").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&language=en-US&query=${movie_name}&page=1&include_adult=false`,
        type: 'GET',
        success: process_response
    })
}

function setup() {
    $("#get_info_button").click(init_ajax);
}

$(document).ready(setup);




