"use strict";

$(document).ready(function () {

  let prijs;
  let verzendkosten;
  let totaal;
  let korting;

  $("#slider").slider({


    slide: function (event, ui) {

      $("#sliderWaarde").html("Aantal: " + ui.value + " stuks.");

    },

    stop: function (event, ui) {

      prijs = Number((ui.value * 4.95).toFixed(2));
      verzendkosten = Number(5);
      totaal = (prijs + verzendkosten).toFixed(2);

      if (ui.value < 20) {
        $("#eindPrijs").html("Prijs: &euro;" + prijs + "." + "<br>" + "Verzendkosten: &euro;" + verzendkosten + "<br>" + "Totaal: &euro;" + totaal);


      } else if (ui.value > 80) {
        verzendkosten = Number(0);
        korting = Number(prijs - ((prijs/100)*10));
        $("#eindPrijs").html("Prijs: &euro;" + prijs + "." + "<br>" + "Verzendkosten: &euro;" + verzendkosten + "<br>" + "Totaal (met 10% korting): &euro;" + korting.toFixed(2));

      } else {
        $("#eindPrijs").html("Prijs: &euro;" + prijs + ".");
      }
    },
    min: 0,
    max: 200,
    value: 0,
    step: 1


  });





















});