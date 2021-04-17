/* LOI opdracht 242S3 - HBO Programmeren in Javascript - By André de Groot.
16-7-2017.
*/

"use strict";

var invoer = document.getElementById("invoerDatum");
var bereken = document.getElementById("berekenBedrag");
var uitvoer = document.getElementById("uitvoer");
var percentage = document.getElementById("invoerPercentage");
var bedrag = document.getElementById("invoerBedrag");
var reset = document.getElementById("resetButton");
var huidigJaartal = 2017;
var inlegBedrag = +bedrag.value;
var percentageUitvoer = +percentage.value;

invoer.onchange = controleerDatum;
bedrag.onchange = controleerBedrag;
percentage.onchange = controleerPercentage;




//When you press the button ...
bereken.addEventListener("click", function() {
    uitvoer.innerHTML = ""; //Clear the output field
    inlegBedrag = +bedrag.value;
    percentageUitvoer = +percentage.value;
    //Als invoervlakken leeg zijn, niet submitten.
    if ((invoer.value == "") || (inlegBedrag == "") || (percentageUitvoer == "")) {
        console.log(typeof invoer.value + " waarde: " + invoer.value);
        console.log(typeof inlegBedrag + " waarde: " + inlegBedrag);
        console.log(typeof percentageUitvoer + " waarde: " + percentageUitvoer);
        return false;
    } else {
        berekenRente(inlegBedrag, percentageUitvoer, huidigJaartal)
    }

});



//Reset button
reset.addEventListener("click", function() {
    resetInvoerVelden();
});








//Check whether or not the date was set correctly. If not, display a message.
function controleerDatum() {
    var d = invoer.value;
    if (testVormVanDatum(d) == false) {
        alert("Vorm van datum onjuist");
        return;
    }


    if (testGeldigeDatum(d)) {
        // alert("Datum " + d + " is OK");
    }
}

function testVormVanDatum(datum) {
    var patroon = /^\d{2}-\d{2}-\d{4}$/;
    return patroon.test(datum);
}

function testGeldigeDatum(datum) {
    var res = datum.split(/-/);
    var dag = res[0];
    var maand = res[1];
    var jaar = res[2];
    if (jaar < 1900 || jaar > 2016) {
        alert("Jaartal te groot of te klein");
        return false;
    }
    if (maand < 1 || maand > 12) {
        alert("Maand te groot of te klein");
        return false;
    }
    if (dag < 1 || dag > 31) {
        alert("Dag te groot of te klein");
        return false;
    }
    switch (+maand) { // denk om plusteken (maand is een string)
        case 2:
            if (isSchrikkeljaar(jaar)) {
                if (dag > 29) {
                    alert("februari " + jaar + " heeft maar 29 dagen");
                    return false;
                }
            } else {
                if (dag > 28) {
                    alert("februari " + jaar + " heeft maar 28 dagen");
                    return false;
                }
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (dag > 30) {
                alert("De " + maand + "e maand heeft maar 30 dagen");
                return false;
            }
            break;
    }
    return true;
}

function isSchrikkeljaar(jaartal) {
    var isSchrikkel = false;
    if (jaartal % 4 == 0 && jaartal % 100 != 0)
        isSchrikkel = true;
    if (jaartal % 400 == 0)
        isSchrikkel = true;
    return isSchrikkel;
}




//Controleer bedrag: is het een nummer? Of is er geen invoer? met een komma of punt?
function controleerBedrag() {

    // MP Javascript zelf verwacht een punt, terwijl wij zelf gewend zijn een komma te gebruiken.
    // Als een gebruiker een komma invoert, snapt javascript niet dat het een numerieke waarde betreft.
    // Het script leest de invoer uit het veld bedrag, om dit te laten werken 
    // moet de waarde in het invoerveld zelf worden aangepast:

    bedrag.value = bedrag.value.replace(",", ".");

    // vervolgens kun je de waarde van het veld in de var b zetten.
    var b = +bedrag.value;

    if (isNaN(b)) {
        uitvoer.innerHTML = "Voer een getal in!";
        bedrag.value = "";
        bedrag.focus();
        return;
    }
}


//Controleer percentage
function controleerPercentage() {

    percentage.value = percentage.value.replace(",", ".");
    var p = +percentage.value;
    if (p < 0 || p > 100 || isNaN(p) || p.length === 0) {
        uitvoer.innerHTML = "Voer een getal tussen de 0 en 100 in.<br><br>";
        percentage.focus();
        percentage.value = "";
        return;
    }
}





//Delete all input and output when pressing the Reset button.
function resetInvoerVelden() {
    invoer.value = "";
    bedrag.value = "";
    percentage.value = "";
    uitvoer.innerHTML = "";
}

//Shows years and corresponding amount + interest until your start amount has doubled.
function berekenRente(inlegBedrag, percentageUitvoer, huidigJaartal) {

    var dubbelBedrag = inlegBedrag * 2;

    do {
        uitvoer.innerHTML += huidigJaartal + ": " + "&euro;" + inlegBedrag.toFixed(2) + "<br>";


        inlegBedrag *= (1 + (percentageUitvoer / 100));
        huidigJaartal++;
    }
    while (inlegBedrag <= dubbelBedrag);





}