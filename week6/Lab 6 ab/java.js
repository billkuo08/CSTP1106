//let a_year=prompt('Is this a leap year?')
function is_leap(a_year) {


    if (a_year % 4 != 0) {
        return false;

    } else if (a_year % 100 != 0) {
        return true;
    } else if (a_year % 400 != 0) {
        return flase;
    }

    else {
        return true;
    }
}



console.log(is_leap(1996))
console.log(is_leap(1997))
console.log(is_leap(1998))
console.log(is_leap(1999))


/*if (a_year % 4 != 0) {
    console.log("Common year")

} else if (a_year % 100 != 0) {
    console.log("Leap year")
} else if (a_year % 400 != 0) {
    console.log("Common year")
}

else {
    console.log("Leap year")
}*/








