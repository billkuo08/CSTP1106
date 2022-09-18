
function calculate_add() {
    console.log('calcute() got called');
    x = parseInt(jQuery('#x').val());
    y = parseInt(jQuery('#y').val());
    jQuery('#result').html(`Result: ${x} + ${y} = ${x + y}`);
    $('#history').append(`<span class='add_class'>${x} + ${y} = ${x + y} <br>`);


}
function calculate_subtract() {
    console.log('calcute() got called');
    x = parseInt(jQuery('#x').val());
    y = parseInt(jQuery('#y').val());
    jQuery('#result').html(`Result: ${x} - ${y} = ${x - y}`);
    $('#history').append(`<span class='sub_class'>${x} - ${y} = ${x - y} <br>`);



}
function calculate_multiply() {
    console.log('calcute() got called');
    x = parseInt(jQuery('#x').val());
    y = parseInt(jQuery('#y').val());
    jQuery('#result').html(`Result: ${x} * ${y} = ${x * y}`);
    $('#history').append(`<span class='multi_class'>${x} * ${y} = ${x * y} <br>`);



}
function calculate_divide() {
    console.log('calcute() got called');
    x = parseInt(jQuery('#x').val());
    y = parseInt(jQuery('#y').val());
    jQuery('#result').html(`Result: ${x} / ${y} = ${x / y}`);
    $('#history').append(`<span class='div_class'>${x} / ${y} = ${x / y} <br>`);



}

function setup() {
    console.log('setup() got called');
    jQuery('#add').click(calculate_add);
    jQuery('#subtract').click(calculate_subtract);
    jQuery('#multiply').click(calculate_multiply);
    jQuery('#divide').click(calculate_divide);



}

jQuery(document).ready(setup);









































