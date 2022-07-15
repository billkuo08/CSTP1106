

function process_response(data) {
    const moviesArr = [];
    moviesArr.push(data);
    let infos = '';

    for (let moviesData of moviesArr) {
        for (let movies of moviesData.results) {
            console.log(movies.original_title);
            infos = `<p>${movies.original_title}</p>\n<p>${movies.overview}</p>  
            <img id='theImg' src=https://image.tmdb.org/t/p/w500/${movies.poster_path}></img>`;

            $('#result').append(infos);

           
            //hide.() show.()
        }
    } 

}

function init_ajax() {
    movie_name = $('#movie_name_input').val().toLowerCase();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${movie_name}`,
        type: 'GET',
        success: process_response
    })

}

function setup() {
    $('#get_info_button').click(init_ajax);
}
$(document).ready(setup);
