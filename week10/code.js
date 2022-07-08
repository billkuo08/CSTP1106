function process_response(data) {
    $('#result').html(JSON.stringify(data.main.temp + ' C'));
}

function init_ajax() {
    city_name = $('#city_name_input').val();
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=389d28e568cf77dd5b2492a4c5bd1ad1&units=metric`,
        type: 'GET',
        success: process_response
    })

}

function setup() {
    $('#get_data_button').click(init_ajax);
}
$(document).ready(setup);