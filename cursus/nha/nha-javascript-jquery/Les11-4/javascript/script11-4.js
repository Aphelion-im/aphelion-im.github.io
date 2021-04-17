"use strict";

$(document).ready(function () {

  $("#thumbnails img").on("click", function () {

    $('#groteFoto').hide().attr('src', $(this).attr('src').replace('100x100-thumb', '300x300-groot')).fadeIn();
    $('#beschrijving').html($(this).attr('title'));
  });


});