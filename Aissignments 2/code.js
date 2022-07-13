

function process_response(data) {
    const moviesArr = [];
    moviesArr.push(data);
    console.log(moviesArr)
    
    
    for (let movies of moviesArr) {
        console.log(movies);
        
        
    }



    // $('#result').html();
    // $('#result2').html();
    // $('#result3').html(`<img id='theImg' src=https://image.tmdb.org/t/p/w500/${data.poster_path} />`);
    // // https://image.tmdb.org/t/p/w500//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg


}

function init_ajax() {
    movie_name = $('#movie_name_input').val();
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
