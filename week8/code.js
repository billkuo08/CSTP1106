// x = 5 // number

// y = x + 40 // number

// console.log(y); // ?


// if(x > 10)
// console.log('X is more than 10'); //?

// else 
//     console.log("X is less than or equal 10"); //?

//     console.log('bye')


// for(i = 0; i <= 10; i++){
//     console.log(i)
// }
// console.log(i) // 11


// i = 1
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// console.log(i) // 11

// i = 1000
// do {
//     console.log(i);

//     i++;
// } while (i <= 10);

// console.log(i);



// function f1() {
//     tmp = jQuery('#x').val();
//     jQuery('#z').html(tmp);
// }

// function setup() {
//     console.log('setup() got called');
//     jQuery('#y').click(f1);

// }

// $(document).ready(setup);

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









































