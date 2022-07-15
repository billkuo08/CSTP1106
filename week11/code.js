
function calculate_add() {
    x = Number($('#x').val());
    y = Number($('#y').val());
    result = x + y;
    $('#result').html(result);
    $('#history').append(`<div class='add_class'> ${x} + ${y} = ${result} 
    <button class="hide_row" onclick="hideThis_(this)"> Hide this! </button></div>`);


}
function calculate_subtract() {
    x =  Number($('#x').val());
    y =  Number($('#y').val());
    result = x - y
    $('#result').html(result);
    $('#history').append(`<div class='sub_class'>${x} - ${y} = ${result}
    <button class="hide_row" onclick="hideThis_(this)"> Hide this! </button></div>`);



}
function calculate_multiply() {

    x =  Number($('#x').val());
    y =  Number($('#y').val());
    result = x * y
    $('#result').html(result);
    $('#history').append(`<div class='multi_class'>${x} * ${y} = ${result} 
    <button class="hide_row" onclick="hideThis_(this)"> Hide this! </button></div>`);



}
function calculate_divide() {
    x =  Number($('#x').val());
    y =  Number($('#y').val());
    result = x / y
    $('#result').html(result);
    $('#history').append(`<div class='div_class'>${x} / ${y} = ${result} 
    <button class="hide_row" onclick="hideThis_(this)"> Hide this! </button></div>`);



}

function hideThis_(oldResult) {
    $(oldResult).parent().hide()
}


function setup() {
    $('#add').click(calculate_add);
    $('#subtract').click(calculate_subtract);
    $('#multiply').click(calculate_multiply);
    $('#divide').click(calculate_divide);

}




$(document).ready(setup);
































