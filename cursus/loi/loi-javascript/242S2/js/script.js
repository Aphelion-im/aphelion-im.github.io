/* LOI opdracht 242S2 - HBO Programmeren in Javascript - Door André de Groot.
22-2-2017.
*/

"use strict";

var bedragInvoeren = document.getElementById("bedragInvoeren");
var output = document.getElementById("output");
var outputBtw = document.getElementById("outputBtw");
var outputZonderBtw = document.getElementById("outputZonderBtw");
var warning = document.getElementById("warning");
var resetButton = document.getElementById("resetButton");
var berekenBtwButton = document.getElementById("berekenBtwButton");
var totaalBedrag = 0;

bedragInvoeren.addEventListener('keydown', function(event) {
    if (event.keyCode == 13) {

        var bedrag = +(bedragInvoeren.value);


        if (isNaN(bedrag)) {
            warning.textContent = "Type een nummer in!";
            bedragInvoeren.value = "";
        } else {


            //Het ingevoerde bedrag optellen bij het totaalbedrag.
            totaalBedrag = totaalBedrag + bedrag;

            //Totaalbedrag afdrukken naar het scherm. Number object methods. toFixed(x); https://www.w3schools.com/jsref/jsref_obj_number.asp
            output.textContent = "€ " + totaalBedrag.toFixed(2) + " (Inclusief BTW).";

            //Na invoeren het invoerveld leegmaken.
            bedragInvoeren.value = "";
            warning.textContent = "";

        }

    }

});

//Functie reset knop
resetButton.addEventListener("click", reset, false);

function reset() {

    totaalBedrag = 0;
    output.textContent = "€ " + totaalBedrag + " (Inclusief BTW).";
    bedragInvoeren.value = "";
    warning.textContent = "";
    outputBtw.textContent = "";
    outputZonderBtw.textContent = "";
}

//Functie bereken BTW
berekenBtwButton.addEventListener("click", berekenBtw, false);

function berekenBtw() {

    var prijsZonderBTW = (totaalBedrag / 121) * 100;
    var btw = totaalBedrag - prijsZonderBTW;

    outputZonderBtw.textContent = "€ " + prijsZonderBTW.toFixed(2) + " (Exclusief BTW)";
    outputBtw.textContent = "€ " + btw.toFixed(2) + " BTW.";

}
