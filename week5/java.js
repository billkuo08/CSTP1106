console.log("is working");

//a = 3
//b = 4
//c = 1

var x1
var x2

function solve_squad() {
    a = $("#a_value").val();
    b = $("#b_value").val();
    c = $("#c_value").val();

    a = Number(a)
    b = Number(b)
    c = Number(c)

    if (a == 0) {
        console.log("Is not quadratic");
        if (b == 0) {
            console.log(" a= 0 and b = 0 so Bye");
        } else {
            x1 = -c / b
            console.log(x1);
        }
    } else {
        d = b ** 2 - 4 * a * c;
        if (d < 0)
            console.log("no real answer");
        else {
            x1 = (-b + Math.sqrt(d)) / (2 * a)
            x2 = (-b - Math.sqrt(d)) / (2 * a)
            console.log("x1 : " + x1);
            console.log("x2 : " + x2);

        }
    }
}


//solve_quad(a, b, c)
// solve_qaud(2, 2, 1)



function setup() {
    console.log("jQuery works!"); 
    $("#calc_the_route_of_quad").click
    (solve_squad)
    //solve_squad(?,?,?)
}
$(document).ready(setup)





