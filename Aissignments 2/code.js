

const process_response = (data) => {

    let infos = '';
    let backdropsArr = [];


    for (let movies in data.results) {
        infos = `<p>${data.results[movies].original_title}</p>\n<p>${data.results[movies].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"></img>`;
        $("#results").append(`${infos}<br>`);
        $("#results").append(`<button onclick="showImg(this)" id="bigImg${movies}" >Show big image</button><br><br>`);
        backdropsArr.push(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].backdrop_path}">`)
    }
    showImg = function () {
        for (i = 0; i < backdropsArr.length; i++) {
            let altImges = `#bigImg${i}`;

            $(altImges).click(() => {
                $("#rightdiv").show(backdropsArr[i]);
            });
            console.log(backdropsArr[i])
  
        }
    }
}




const init_ajax = () => {
    let movie_name = $("#movie_name_input").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=282b574a1934c914c2e6ff9803175c12&query=${movie_name}`,
        type: "GET",
        success: process_response
    })
}

const setup = () => {
    $("#get_info_button").click(init_ajax);
}

$(document).ready(setup);



// function process_response(data) {

//     let infos = '';


//     for (i = 0; i < data.results.length; i++) {

//         infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
//         <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></img>`;


//         showThis = function () {

//             for (let movies of data.results) {

//                 $('#right_div').append(`<img id="thImg2" src="https://image.tmdb.org/t/p/original/${movies.backdrop_path}" width=100%.show()></img>`);

//             }
//         }


//         $("#result").append(`${infos}<br><button id="back_drop" onclick="showThis(this)"> backdrop image </button><br><br>`);


//     }

// }

// function process_response(data) {

//     let infos = '';
//     let backdropsArr = [];


//     for (let movies in data.results) {
//         infos = `<p>${data.results[movies].original_title}</p>\n<p>${data.results[movies].overview}</p>
//         <img src="https://image.tmdb.org/t/p/w500/${data.results[movies].poster_path}"></img>`;
//         $("#results").append(`${infos}<br>`);
//         $("#results").append(`<button id="alt${movies}">Show alternative image</button><br><br>`);
//         backdropsArr.push(`<img src="https://image.tmdb.org/t/p/w500/${data.results[movies].backdrop_path}">`)
//     }

//     for (i = 0; i < backdropsArr.length; i++) {
//         let altImges = `#alt${i}`;

//         $(altImges).click(() => {
//             $("#rightdiv").empty().append(backdropsArr[i]);
//         });

//         console.log(backdropsArr[0]);
//     }
// }




