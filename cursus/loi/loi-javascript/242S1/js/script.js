/* LOI opdracht 242S1 - HBO Programmeren in Javascript - Door André de Groot.
20-2-2017.
*/

"use strict";

var button = document.getElementById("button");
button.addEventListener("click", bereken, false);


function bereken() {

    var invoerX = document.getElementById("inputX");
    var getalX = +invoerX.value;

    var invoerY = document.getElementById("inputY");
    var getalY = +invoerY.value;

    if (getalX == "" || getalY == "" || isNaN(getalX) || isNaN(getalY) ) {
        return;
    }

    var optellen = getalX + getalY;
    var aftrekken = getalX - getalY;
    var product = getalX * getalY;
    var quotient = getalX / getalY;

    document.getElementById("som").innerHTML =
        "De som van " + getalX + " en " + getalY + " is " + optellen;

    document.getElementById("verschil").innerHTML =
        "Het verschil van " + getalX + " en " + getalY + " is " + aftrekken;

    document.getElementById("product").innerHTML =
        "Het product van " + getalX + " en " + getalY + " is " + product;

    document.getElementById("quotient").innerHTML =
        "Het quotient van " + getalX + " en " + getalY + " is " + quotient;


    if (getalX > getalY) {
        document.getElementById("resultaat").innerHTML =
            "X = " + getalX + " is groter dan " + "Y = " + getalY;
    } else if (getalX != getalY) {
        document.getElementById("resultaat").innerHTML =
            "X = " + getalX + " is kleiner dan " + "Y = " + getalY;
    } else {
        document.getElementById("resultaat").innerHTML =
            "X = " + getalX + " is gelijk aan " + "Y = " + getalY;
    }

}
