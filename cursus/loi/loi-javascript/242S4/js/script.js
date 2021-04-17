/* LOI opdracht 242S4 - HBO Programmeren in Javascript - By André de Groot.
9-9-2017.
*/

"use strict";

var voegToeButton = document.getElementById("voegToeButton");
var voorNaam = document.getElementById("voorNaam");
var achterNaam = document.getElementById("achterNaam");
var aantalPunten = document.getElementById("aantalPunten");
var reset = document.getElementById("resetButton");
var tabel = document.getElementById("myTable");

aantalPunten.onchange = geheleCijfers;

// Event listeners
// Verwijder een rij
tabel.addEventListener("click", function(event) {
    if (event.target.tagName == "SPAN") {
        if (confirm("Weet u zeker dat u deze rij wilt verwijderen?") == true) {
          event.target.parentNode.parentNode.remove();
          herNummer();
        } 
    } 
});

//Reset button
reset.addEventListener("click", function() {
    resetInvoerVelden();
});

//Delete all input and output when pressing the Reset button.
function resetInvoerVelden() {
    voorNaam.value = "";
    achterNaam.value = "";
    aantalPunten.value = "";
}

voegToeButton.addEventListener("click", function() {

    var $voorNaam = voorNaam.value;
    var $achterNaam = achterNaam.value;
    var $aantalPunten = aantalPunten.value;

    toTitleCase($voorNaam);

    if ($voorNaam == "" || $voorNaam == null) {
        alert("Voer een voornaam in!");
        voorNaam.value = "";
        voorNaam.focus();
    } else if ($achterNaam == "" || $achterNaam == null) {
        alert("Voer een achternaam in!");
        achterNaam.value = "";
        achterNaam.focus();
    } else if ($aantalPunten == "" || $aantalPunten == null) {
        alert("Voer het aantal punten in!");
        aantalPunten.value = "";
        aantalPunten.focus();
    } else if (isNaN($voorNaam) == false) {
        alert("Voer alleen letters in!");
        voorNaam.value = "";
        voorNaam.focus();
    } else if (isNaN($achterNaam) == false) {
        alert("Voer alleen letters in!");
        achterNaam.value = "";
        achterNaam.focus();
    } else if (isNaN($aantalPunten) == true) {
        alert("Voer alleen cijfers in!");
        aantalPunten.value = "";
        aantalPunten.focus();
    } else if ($aantalPunten < 0) {
        alert("Voer alleen cijfers boven de 0 in!");
        aantalPunten.value = "";
        aantalPunten.focus();
    } else if ($aantalPunten > 1000) {
        alert("Voer alleen cijfers onder de 1000 in!");
        aantalPunten.value = "";
        aantalPunten.focus();
    } else {
        var row = myTable.insertRow();
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        var cell3 = row.insertCell();
        var cell4 = row.insertCell();
        var cell5 = row.insertCell();
        cell2.innerHTML = $voorNaam.charAt(0).toUpperCase() + $voorNaam.slice(1); //Maak van elke eerste letter een hoofdletter
        cell3.innerHTML = $achterNaam;
        cell4.innerHTML = $aantalPunten;
        cell5.innerHTML = "<span class='fa fa-trash-o' title='Verwijderen'></span>";
        herNummer();
        // Leeg velden na invoer:
        voorNaam.value = "";
        achterNaam.value = "";
        aantalPunten.value = "";
    }

    //Voorbeeld: 
    //https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_table_insertrow

});

// Functies
function geheleCijfers() {
    aantalPunten.value = aantalPunten.value.replace(",", ".");
    aantalPunten.value = parseInt(aantalPunten.value);
}

//Voeg een vuilnisbak icoon toe aan de items
function attachTrashBinIcons(listItem) {
    var attachIcon = document.createElement("SPAN");
    attachIcon.className = "fa fa-trash-o";
    //Insert the icon before the text:
    listItem.insertBefore(attachIcon, listItem.childNodes[0]);
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// Hernummer de tabel na verwijderen
function herNummer() {
    for (var id = 1; id < tabel.rows.length; id++) {
        var row = document.getElementsByTagName("tr")[id];
        row.cells[0].innerHTML = id;
    }
}

