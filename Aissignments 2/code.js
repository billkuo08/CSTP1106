

function process_response(data) {

    let infos = '';
    let backdropsArr = [];


    for (let movies in data.results) {
        infos = `<p>${data.results[movies].original_title}</p>\n<p>${data.results[movies].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"></img>`;
        $("#results").append(`${infos}<br><button id="Alt${movies}"> Show alternative image </button><br><br>`);
        backdropsArr.push(`<img src="https://image.tmdb.org/t/p/w500${data.results[movies].backdrop_path}">`)
    }

    for (i = 0; i < backdropsArr.length; i++) {
        // let altImges = `#A${bigImges}`;
        $(`#Alt${i}`).click(() => {
            $("#right_div").empty().append(backdropsArr[i])
        });
    }

}


function init_ajax() {
    let movie_name = $("#movie_name_input").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${movie_name}`,
        type: 'GET',
        success: process_response
    })
}

function setup() {
    $("#get_info_button").click(init_ajax);
}

$(document).ready(setup);




