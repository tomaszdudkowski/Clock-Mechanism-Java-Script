/* ---------------------------------------------- */

    Tytuł: Mechanizm wyboru godziny i minut.
    Autor: Tomasz Dudkowski
    Data: 19 marca 2017 22:00

/* ---------------------------------------------- */


var boolMinutes = 1; // Flaga minut
var boolHours = 1; // Flaga godzin

/* Dodaje zero przed pojedyńcze cyfry. */
function oneNumber(data) { 
    if (data<=9) {
        var temp = data;
        data = "0" + temp;
        return data;
    }
}

/* --------------------------------------------------------------------- */

/* MINUTY OD 0 DO 59 Z KROKIEM CO 10 MINUT */

/* Zwiększa minuty o 10m */
function plusMinutes() { 
    if ( boolMinutes === 1 || boolMinutes === 2) {
        minutes.value = Number(minutes.value) + 10;
        if(Number(minutes.value)===60) {
            boolMinutes = 0;
            minutes.value = 59;
        }
    }
}

/* Zmniejsza minuty o 10m */
function minusMinutes() {
    if(boolMinutes === 0) {
        minutes.value = Number(minutes.value) - 9;
        boolMinutes = 1;
    } else if(Number(minutes.value) === 10) {
        minutes.value = oneNumber(Number(minutes.value) - 10);
        boolMinutes = 2;
    } else if(Number(minutes.value) > 10 ) {
        minutes.value = Number(minutes.value) - 10;
    }
}

/* --------------------------------------------------------------------- */

/* GODZINY OD 0 DO 23 Z KROKIEM CO 1 GODZINA */

/* Zwiększa godzinę o 1h */
function plusHours() {
    if ( boolHours === 1 || boolHours === 2 ) {
        if(Number(hours.value) < 9) {
            hours.value = oneNumber(Number(hours.value) + 1);
        } else if(Number(hours.value) === 9) {
            hours.value = Number(hours.value) + 1;
        } else if(Number(hours.value) > 9) {
            hours.value = Number(hours.value) + 1;
        }
        if(Number(hours.value)===23) {
            boolHours = 0;
        }
    }
}

/* Zmniejsza godzinę o 1h */
function minusHours() {
    if(boolHours === 0) {
        if(Number(hours.value) < 9) {
            hours.value = oneNumber(Number(hours.value) - 1);
        } else if(Number(hours.value) === 9) {
            hours.value = oneNumber(Number(hours.value) - 1);
        } else if(Number(hours.value) > 9) {
            hours.value = Number(hours.value) - 1;
        }
        boolHours = 1;
    } else if(Number(hours.value) === 0) {
        boolHours = 2;
    } else {
        if(Number(hours.value) < 9) {
            hours.value = oneNumber(Number(hours.value) - 1);
        } else if(Number(hours.value) === 9) {
            hours.value = oneNumber(Number(hours.value) - 1);
        } else if(Number(hours.value) <= 10 ) {
            hours.value = oneNumber(Number(hours.value) - 1);
        } else if(Number(hours.value) > 9) {
            hours.value = Number(hours.value) - 1;
        }
    }
}

/* --------------------------------------------------------------------- */