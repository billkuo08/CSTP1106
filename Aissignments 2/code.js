

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
            $("#right_div").html(backdropsArr[i])
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



// The function which displays all of the
// static info into the DOM


// const processData = (data) => {

//     // We will store all the backdrops here
//     let backdropImg = [];

//     // gets all necessary data from api
//     // and either displays it or stores
//     // it for future use
//     for (let movies in data.results) {
//         $("#movieResults").append(JSON.stringify(`${data.results[movies].original_title}<br>`));
//         $("#movieResults").append(JSON.stringify(`${data.results[movies].overview}<br><br>`));
//         $("#movieResults").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"><br>`);
//         $("#movieResults").append(`<button id="img${movies}">See background image!</button><br>`);
//         backdropImg.push(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].backdrop_path}">`);
//     }

//     // this will go through the buttons
//     // and checks if there is one which is
//     // pressed and shows the backdrop
//     for (let i = 0; i < backdropImg.length; i++) {
//         let imgCheck = `#img${i}`;
//         $(imgCheck).click(() => {
//             $("#topRight").empty().append(backdropImg[i]);
//         });
//     }
// }

// // This function gets the movie api
// // and sends it to the processData
// // function to run
// const searchMovie = () => {
//     let movie = $("#searchBar").val();
//     $.ajax({
//         url: `https://api.themoviedb.org/3/search/movie?api_key=0129b7a280b04a550855f7ce4602c30a&language=en-US&query=${movie}&page=1&include_adult=false`,
//         type: "GET",
//         success: processData
//     })
// }

// // This runs when the user enter a value
// // in the search box and clicks the
// // search button
// const setup = () => {
//     $("#searchButton").click(searchMovie);
// }

// // Starts up when page is loaded
// $(document).ready(setup);

