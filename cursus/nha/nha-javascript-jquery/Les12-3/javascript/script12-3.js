"use strict";

$(document).ready(function () {

  let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl&units=metric&appid=f1fbdc506365fb9247bd026b1b681c9c';

  $.ajax({

    url: weatherUrl,
    type: 'GET',
    dataType: 'jsonp',
    contentType: 'application/json',
    success: function (data) {
      let hetWeer = 'De temperatuur is: ' + data.main.temp + ' &#8451;' + '<br>';
      hetWeer += 'Stad: ' + data.name + '.' + '<br>';
      hetWeer += 'Windsnelheid: ' + data.wind.speed + ' meter/seconde' + '.' + '<br>';
      hetWeer += 'Windrichting: ' + data.wind.deg + ' graden' + '.' + '<br>';
      hetWeer += 'Wolken: ' + data.clouds.all + ' %' + '.';
      $('#divResult').append(hetWeer);
    }
  });
});