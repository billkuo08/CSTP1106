

function process_response(data) {

    let infos = '';
    const backdropsArr = [];
    let backdropNum = 0;


    for (i = 0; i < data.results.length; i++) {

        infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
        <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></img>`;

        backdropsArr.push(data.results[i].backdrop_path);


        showThis = function () {
            console.log(backdropNum);

            $('#right_div').html(`<img id="${backdropNum}" src="https://image.tmdb.org/t/p/original${backdropsArr[backdropNum]}" width=100%.show()></img>`);
            backdropNum++;

        }


        $("#result").append(`${infos}<br><button id="back_drop" onclick="showThis(this)"> backdrop image </button><br><br>`);


    }

    // console.log(backdropsArr);
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




// function process_response(data) {

//     let infos = '';


//     for (i = 0; i < data.results.length; i++) {

//         infos = `<p>${data.results[i].original_title}</p>\n<p>${data.results[i].overview}</p>
//         <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"></img>`;


//         showThis = function () {

//             for (let movies of data.results) {

//                     $('#right_div').append(`<img id="thImg2" src="https://image.tmdb.org/t/p/original/${movies.backdrop_path}" width=100%.show()></img>`);
                
//             }
//         }


//         $("#result").append(`${infos}<br><button id="back_drop" onclick="showThis(this)"> backdrop image </button><br><br>`);


//     }

// }

