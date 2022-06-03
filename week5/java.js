console.log("is working");

a = 4
b = 0
c = 1

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
        console.log("x1 : " +x1);
        console.log("x2 : " +x2);

    }
}

